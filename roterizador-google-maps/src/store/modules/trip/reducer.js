/* eslint-disable func-names */
/* eslint-disable default-param-last */
import * as types from "../types";

const initialState = {
  trip: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TRIP_REQUEST: {
      const newState = { ...state };
      return newState;
    }
    case types.TRIP_REQUEST_UPDATE: {
      const newState = { ...state };
      return newState;
    }
    case types.TRIP_CREATED_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.TRIP_UPDATED_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.TRIP_REQUEST_DELETE: {
      const newState = { ...state };
      return newState;
    }

    case types.TRIP_DELETE_SUCCESS: {
      const { payload: id } = action;
      const updatedTrips = state.trips.filter((trip) => trip.id !== id);
      return { ...state, trips: updatedTrips };
    }
    case types.TRIP_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
}
