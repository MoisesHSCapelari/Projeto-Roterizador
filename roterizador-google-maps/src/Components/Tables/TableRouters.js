/* eslint-disable react/button-has-type */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useDispatch, } from "react-redux";
import { toast } from "react-toastify";
import { TableWrapper, StyledLink, TextRight } from "./TablesStyles";
import axios from "../../services/axios";
import * as actions from "../../store/modules/trip/actions";
import InfiniteScroll from "react-infinite-scroll-component";


export default function TableRouters() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadTrips = async (pageNum) => {
    try {
      setLoading(true);
      const response = await axios.get(`/routes?page=${pageNum}&limit=20`);
      setData((prevData) => [...prevData, ...response.data]);
      setHasMore(response.data.length === 20);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrips(page);
  }, [page]);

  const handleDeleteAsk = async (event, id) => {
    event.preventDefault();

    const confirmed = window.confirm("Tem certeza que deseja deletar esta rota?");

    if (confirmed) {
      try {
        await dispatch(actions.tripDeleteRequest({ id }));
        setData((prevData) => prevData.filter((route) => route.id !== id));
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={handleLoadMore}
      hasMore={hasMore}
      loader={<h4>Carregando...</h4>}
    >
      <TableWrapper>
        <thead>
          <tr>
            <th>Ponto de partida</th>
            <th>Ponto de chegada</th>
            <th>Distancia da Rota</th>
            <th>Tempo da Rota</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data.map((route) => (
            <tr key={String(route.id)}>
              <td>{route.start_location_name}</td>
              <td>{route.end_location_name}</td>
              <td>{route.distance_route} km</td>
              <td>{route.time_route}</td>
              <td>
              <StyledLink to={`/rotas/${route.id}/update`}>
                <FaPencilAlt />
              </StyledLink>
            </td>
            <td>
              <StyledLink
                 onClick={(event) => handleDeleteAsk(event, route.id)}
                to={`/rotas/${route.id}/delete`}
              >
                <FaTrashAlt />
              </StyledLink>
            </td>
            </tr>
          ))}
        </tbody>

      </TableWrapper>
      <TextRight>
      {loading && <p>Carregando mais...</p>}
      {!loading && hasMore && <button onClick={handleLoadMore}>Carregar mais</button>}
      </TextRight>
    </InfiniteScroll>

  );
}

