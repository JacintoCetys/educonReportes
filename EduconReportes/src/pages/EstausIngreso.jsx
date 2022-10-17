import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Box, Container, Grid } from '@mui/material'
import { EstatusIngresoForm } from '../components/estatusIngreso/EstatusIngresoForm'
import { EstatusIngresoList } from '../components/estatusIngreso/EstatusIngresoList'
import { fetchEstatusIngreso } from '../helpers/fetch'

export const EstatusIngreso = () => {

    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleResultado = async (criterios) => {
        const resp = await fetchEstatusIngreso('padron', criterios, 'POST');
        const body = await resp.json();
        setResponse(body);
        setLoading(false);
    }

    const handleLoading = (load) => {
        setLoading(load);
    }

    return (
        <>
            <Helmet>
                <title>Padrón Único</title>
            </Helmet>
            <Box sx={{
                backgroundColor: 'Background.default',
                minHeight: '100%',
                py: 3
            }}>
                <Container maxWidth="lg">
                    <Grid container direction="row" justifyContent="flex-start" spacing={3}>
                        <Grid item xs={12} >
                            <EstatusIngresoForm onHandleResultado={handleResultado} onHandleLoading={handleLoading} />
                        </Grid>
                        <Grid item xs={12} >
                            <EstatusIngresoList padronData={response.padronUnico} isLoading={loading}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}