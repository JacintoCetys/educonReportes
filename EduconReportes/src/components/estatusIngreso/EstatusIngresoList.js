import React, { } from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';
import { Typography, CircularProgress, Backdrop } from '@mui/material';

export const EstatusIngresoList = ({ padronData, isLoading }) => {

  const columns = [
    { name: 'Cve_Periodo', label: 'Periodo', options: { filter: true, sort: true } },
    { name: 'Nombre_Periodo', label: 'Nombre Periodo', options: { filter: true, sort: true } },
    { name: 'Cve_Programa', label: 'Programa', options: { filter: true, sort: true } },
    { name: 'Cve_PlanEstudio', label: 'Plan', options: { filter: true, sort: true } },
    { name: 'Matricula', label: 'Matrícula', options: { filter: true, sort: true } },
    { name: 'Nombre_Abr', label: 'Abreviado', options: { filter: true, sort: true } },
    { name: 'CVE_NIVEL', label: 'Nivel', options: { filter: true, sort: true } },    
    { name: 'CVE_DEPARTAMENTO', label: 'Departamento', options: { filter: true, sort: true } },
    { name: 'Grupo', options: { filter: true, sort: true } },
    { name: 'Estatus', options: { filter: true, sort: true } },
    { name: 'Estatus_Intencion', label: 'Estatus Intención', options: { filter: true, sort: true } },
    { name: 'Direccion_Alu', label: 'Dirección', options: { filter: true, sort: true } },
    { name: 'Colonia_Alu', label: 'Colonia', options: { filter: true, sort: true } },
    { name: 'Telefono_Alu', label: 'Teléfono', options: { filter: true, sort: true } },
    { name: 'Telefono_Celular_Alu', label: 'Celular', options: { filter: true, sort: true } },
    { name: 'Email_Alumno', label: 'Correo-e', options: { filter: true, sort: true } },
    { name: 'Correo_Institucional_Alumno', label: 'Correo-e Institucional', options: { filter: true, sort: true } },
    { name: 'Sexo', options: { filter: true, sort: true } },
    { name: 'Fecha_Nacimiento', label: 'Fecha Nacimiento', options: { filter: true, sort: true, customBodyRender: value => moment(new Date(value)).format("DD-MM-YYYY") } },
    { name: 'Fecha_Baja', label: 'Fecha baja', options: { filter: true, sort: true } },
    { name: 'Descripcion', label: 'Descripción', options: { filter: true, sort: true } },
    { name: 'Empresa_Padre', label: 'Empresa', options: { filter: true, sort: true } },
  ];


  const data = [];
  if (padronData !== undefined) {
    data.push(...padronData);
  }

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    fixedHeader: true,
    fixedSelectColumn: true,
    rowsPerPage: 15,
    tableBodyHeight: '400px',
    draggableColumns: {
      enabled: true
    },
    downloadOptions: {
      filename: "padronUnico.csv",
      // separator: ";",
      filterOptions: {
        useDisplayedColumnsOnly: true,
        useDisplayedRowsOnly: true
      },
    },
    // eslint-disable-next-line no-shadow
    onDownload: (buildHead, buildBody, columns, data) => `\uFEFF ${buildHead(columns)} ${buildBody(data)}`,
    print: false,
    textLabels: {
      body: {
        noMatch: "Lo sentímos, no se encontraron registros",
        toolTip: "Sort",
        columnHeaderTooltip: column => `Orden por ${column.label}`
      },
      pagination: {
        next: "Página Siguiente",
        previous: "Página Anterior",
        rowsPerPage: "Renglones por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Search",
        downloadCsv: "Descargar CSV",
        print: "Print",
        viewColumns: "Vista Columnas",
        filterTable: "Filtros",
      },
      filter: {
        all: "TODOS",
        title: "FILTROS",
        reset: "RESET",
      },
      viewColumns: {
        title: "Columnas",
        titleAria: "Show/Hide Table Columns",
      },
      selectedRows: {
        text: "renglón(es) seleccionados",
        delete: "Borrar",
        deleteAria: "Borrar renglón(es) seleccionados",
      },
    }
  };

  // 
  return (
    <>
      <MUIDataTable
        title={<Typography variant="h2">Resultado padrón</Typography>}
        data={data}
        columns={columns}
        options={options}
      />
      {
        (isLoading) ? <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop> : null

      }
    </>
  )
}

EstatusIngresoList.propTypes = {
  padronData: PropTypes.array,
  isLoading: PropTypes.bool
}
