import { fetchAlumnoCampus } from '../helpers/fetch'; // fetchAlumno,
import { types } from '../types/types';


const alumnoUpdated = (alumno) => ({
    type: types.alumnoUpdated,
    payload: alumno,
});

export const alumnoSearch = (alumno) => {
    console.log('Inicial Search');
    return async (dispatch) => {
        try {
            // const resp = await fetchAlumno('alumnos', alumno);
            const resp = await fetchAlumnoCampus('alumnos/alumno/', alumno, 'POST');
            const body = await resp.json();

            if (body.ok) {
                dispatch(alumnoUpdated(body.alumno));
            }
        } catch (error) {
            console.log(error);
        }
    }
};

