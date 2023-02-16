/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";
import * as actions from "./actions";
import * as types from "../types";
import history from "../../../services/history";
import axios from "../../../services/axios";

// eslint-disable-next-line consistent-return
function* registerTripRequest({ payload }) {
  const {
    start_location_name,
    start_location_lat,
    start_location_lng,
    end_location_name,
    end_location_lat,
    end_location_lng,
    time_route,
    distance_route,
  } = payload;

  try {
    yield call(axios.post, "/routes", {
      start_location_name,
      start_location_lat,
      start_location_lng,
      end_location_name,
      end_location_lat,
      end_location_lng,
      time_route,
      distance_route,
    });
    toast.success("A rota solicita foi calculada corretamente");
    yield put(
      actions.tripCreatedSuccess({
        start_location_name,
        start_location_lat,
        start_location_lng,
        end_location_name,
        end_location_lat,
        end_location_lng,
        time_route,
        distance_route,
      })
    );
    history.push("/");
  } catch (e) {
    const errors = get(e, "response.data.errors", []);
    const status = get(e, "response.status", 0);

    if (status === 401) {
      toast.error("Ocorreu um Erro inesperado");
      yield put(actions.tripFailure());
      return history.push("/");
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    }

    return yield put(actions.tripFailure());
  }
}

function* updateTripRequest({ payload }) {
  const {
    id,
    start_location_name,
    start_location_lat,
    start_location_lng,
    end_location_name,
    end_location_lat,
    end_location_lng,
    time_route,
    distance_route,
  } = payload;

  try {
    yield call(axios.put, `/routes/${id}`, {
      start_location_name,
      start_location_lat,
      start_location_lng,
      end_location_name,
      end_location_lat,
      end_location_lng,
      time_route,
      distance_route,
    });
    toast.success("A rota foi atualizada com sucesso");
    yield put(
      actions.tripUpdatedSuccess({
        id,
        start_location_name,
        start_location_lat,
        start_location_lng,
        end_location_name,
        end_location_lat,
        end_location_lng,
        time_route,
        distance_route,
      })
    );
  } catch (e) {
    const errors = get(e, "response.data.errors", []);
    const status = get(e, "response.status", 0);

    if (status === 401) {
      toast.error("Ocorreu um erro inesperado");
      yield put(actions.tripFailure());
      return history.push(`/routes/${id}`);
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    }

    return yield put(actions.tripFailure());
  }
}

function* deleteTripRequest({ payload }) {
  const { id } = payload;

  try {
    yield call(axios.delete, `/routes/${id}`);
    toast.success("A rota foi excluída com sucesso");
    yield put(actions.tripDeletedSuccess(id));
  } catch (e) {
    const status = get(e, "response.status", 0);

    if (status === 401) {
      toast.error("Ocorreu um erro inesperado");
      yield put(actions.tripFailure());
      return history.push("/");
    }

    return yield put(actions.tripFailure());
  }
}

export default all([
  takeLatest(types.TRIP_REQUEST, registerTripRequest),
  takeLatest(types.TRIP_REQUEST_UPDATE, updateTripRequest),
  takeLatest(types.TRIP_REQUEST_DELETE, deleteTripRequest),
]);
