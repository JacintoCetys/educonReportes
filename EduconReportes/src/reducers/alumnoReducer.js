import { types } from '../types/types';

const initialState = {
    alumno: []
}

export const alumnoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.alumnoUpdated:
            return {
                ...state,
                alumno: action.payload
            };
    
        default:
            return state;
    }
}