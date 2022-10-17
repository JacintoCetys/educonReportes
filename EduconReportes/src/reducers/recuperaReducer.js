import { types } from '../types/types';

const initialState = {
  recupera: [],
  active: false,
  found: true,
  send: false
};

export const recuperaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.recuperaPassword:
      return {
        ...state,
        recupera: action.payload,
        active: action.active,
        found: action.found
      };

    case types.recuperaAcepted:
      return {
        ...state,
        active: true
      };

    case types.recuperaSend:
      return {
        ...state,
        send: action.send
      };
    default:
      return state;
  }
};
