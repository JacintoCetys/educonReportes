const baseUrl = process.env.REACT_APP_API_URL;

const fetchAlumno = (endpoint, data) => {
    const url = `${baseUrl}/${endpoint}/${data.matricula}`;
    console.log(url);
    console.log(data)
    return fetch(url);

};

const fetchAlumnoCampus = (endpoint, data, method = 'POST') => {
    const url = `${baseUrl}/${endpoint}`;

    return fetch(url, {
        method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

const fetchEmailSend = (endpoint, data, method = 'POST') => {
    const url = `${baseUrl}/${endpoint}`;

    return fetch(url, {
        method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


const fetchEstatusIngreso = (endpoint, data, method = 'POST') => {
    const url = `${baseUrl}/${endpoint}`;

    return fetch(url, {
        method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
export { fetchAlumno, fetchAlumnoCampus, fetchEmailSend, fetchEstatusIngreso };