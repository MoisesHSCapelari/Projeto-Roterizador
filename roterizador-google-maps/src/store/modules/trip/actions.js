import * as types from "../types";

export function tripRequest(payload) {
  return {
    type: types.TRIP_REQUEST,
    payload,
  };
}

export function tripUpdateRequest(payload) {
  return {
    type: types.TRIP_REQUEST_UPDATE,
    payload,
  };
}
export function tripDeleteRequest(id) {
  return {
    type: types.TRIP_REQUEST_DELETE,
    payload: id,
  };
}

export function tripUpdatedSuccess(payload) {
  return {
    type: types.TRIP_UPDATED_SUCCESS,
    payload,
  };
}

export function tripCreatedSuccess(payload) {
  return {
    type: types.TRIP_CREATED_SUCCESS,
    payload,
  };
}
export function tripDeletedSuccess(id) {
  return {
    type: types.TRIP_DELETE_SUCCESS,
    payload: id,
  };
}

export function tripFailure(payload) {
  return {
    type: types.TRIP_FAILURE,
    payload,
  };
}
