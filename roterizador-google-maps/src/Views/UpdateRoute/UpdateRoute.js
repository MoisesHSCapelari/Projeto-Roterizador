/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Flex,
  FormControl,
  FormInsert,
  FormWrapper,
  MapModalContainer,
  TextRight,
  ViewForm,
} from "./styled";

import * as actions from "../../store/modules/trip/actions";
import axios from "../../services/axios";

export default function UpdateRoute() {
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  /* Autocomplete paradas e endereços */
  const [address, setAddress] = React.useState("");
  const [addressStop, setAddressStop] = React.useState("");
  /*  Fim Autocomplete paradas e endereços */

  /* Reclações Mapa */
  const [position, setPosition] = React.useState({
    lat: -23.54,
    lng: -46.63,
  });
  const [distance, setDistance] = React.useState("");
  const [positionStop, setPositionStop] = React.useState({});
  const [directions, setDirections] = React.useState(null);
  const [time, setTime] = React.useState(null);

  // controle de atualização de dados
  const [shouldUpdate, setShouldUpdate] = React.useState(false);

  /* Funçoes de auto complemento pontos de origem e destino e parada */

  const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    setAddressStop(selectedAddress);
    const results = await geocodeByAddress(selectedAddress);
    const latLng = await getLatLng(results[0]);
    setPosition(latLng);
  };

  const handleSelectStop = async (selectedAddress) => {
    setAddressStop(selectedAddress);
    const results = await geocodeByAddress(selectedAddress);
    const latLng = await getLatLng(results[0]);
    setPositionStop(latLng);
  };

  /* controle de dados do back */
  const [data, setData] = React.useState({});
  const { id } = useParams();

  /* criação DO mapa */
  const Map = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap defaultZoom={6} defaultCenter={position}>
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{ suppressMarkers: true }}
          />
        )}
        <Marker position={position} />
        <Marker position={positionStop} />
      </GoogleMap>
    ))
  );

  // função calculo de tempo, distancia e reinderização de rotas
  const handleMultFunctions = (event) => {
    event.preventDefault();
    try {
      const DirectionsService = new window.google.maps.DirectionsService();

      let formErrors = false;

      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(position.lat, position.lng),
          destination: new window.google.maps.LatLng(
            positionStop.lat,
            positionStop.lng
          ),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            const distance = result.routes[0].legs[0].distance.value / 1000;
            setDistance(`${distance.toFixed(2)} KM`);
            const timeInSeconds = result.routes[0].legs[0].duration.value;
            const hours = Math.floor(timeInSeconds / 3600);
            const remainingMinutes = ((timeInSeconds % 3600) / 60).toFixed(0);
            const formattedTime = `${hours} horas e ${remainingMinutes} minutos`;
            setTime(formattedTime);
            setDirections(result);

            // validação de dados para seguir com Insert no BD
            if (!address) {
              formErrors = true;
              toast.error("Coordenada de partida não informada");
            }
            if (!addressStop) {
              formErrors = true;
              toast.error("Coordenada de chegada não informada");
            }

            // Chama o action para salvar a rota no BD
            dispatch(
              actions.tripUpdateRequest({
                id,
                start_location_name: address,
                start_location_lat: position.lat,
                start_location_lng: position.lng,
                end_location_name: addressStop,
                end_location_lat: positionStop.lat,
                end_location_lng: positionStop.lng,
                time_route: formattedTime,
                distance_route: distance,
              })
            );
            setShouldUpdate(true);
          } else {
            toast.error("Coordenadas não informadas");
          }
        }
      );
    } catch (error) {
      toast.error(`Erro: ${error}`);
    }
  };

  //  verifica se shouldUpdate é verdadeiro e chama a função fetchData para atualizar os dados
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/routes/${id}`);
        setData(response.data);
      } catch (error) {
        toast.error("Erro interno ao processar asua solicitação");
      }
    }

    fetchData();

    // reseta shouldUpdate para false após a atualização
    if (shouldUpdate) {
      fetchData();
      setShouldUpdate(false);
    }
  }, [id, shouldUpdate]);

  return (
    <Flex>
      <ViewForm>
        <p>Ponto de Partida atual: {data.start_location_name}.</p>
        <p>Ponto de Chegada atual: {data.end_location_name}.</p>
        <p>Tempo de rota atual: {data.time_route}.</p>
        <p>distancia de atual: {data.distance_route} Km.</p>
        <FormWrapper>
          <FormInsert>
            <FormControl>
              <label>Ponto de Partida:</label>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Digite o endereço",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        const style = suggestion.active
                          ? { backgroundColor: "#E3E2DF", cursor: "pointer" }
                          : { backgroundColor: "#E3E2DF", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </FormControl>

            <FormControl>
              <label>Destino:</label>
              <PlacesAutocomplete
                value={addressStop}
                onChange={setAddressStop}
                onSelect={handleSelectStop}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Digite o endereço",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        const style = suggestion.active
                          ? { backgroundColor: "#E3E2DF", cursor: "pointer" }
                          : { backgroundColor: "#E3E2DF", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </FormControl>
            {distance && <p>A distância da viagem é de {distance}.</p>}
            {time && <p> O Tempo de duração da viagem é de {time}.</p>}

            <button type="button" onClick={handleMultFunctions}>
              Recalcular Rota
            </button>
          </FormInsert>
        </FormWrapper>
      </ViewForm>

      <MapModalContainer>
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ height: `480px`, width: `1250px` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        >
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{ suppressMarkers: true }}
            />
          )}
        </Map>
      </MapModalContainer>
    </Flex>
  );
}
