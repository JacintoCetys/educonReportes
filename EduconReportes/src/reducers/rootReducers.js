import { combineReducers } from 'redux';
import { alumnoReducer } from './alumnoReducer';
import { recuperaReducer } from './recuperaReducer';

export const rootReducer = combineReducers({
    alumno: alumnoReducer,
    recupera: recuperaReducer
});