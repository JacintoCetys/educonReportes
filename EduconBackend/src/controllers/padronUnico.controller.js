import { getConnection, dbCampus } from '../database';

export const getPadronUnico = async (req, res) => {
	const { periodo, anio, campus } = req.body;
	
	try {
		const pool = await getConnection(dbCampus(campus));

		const periodoFilter = `${anio}-${periodo}`;
		console.log(periodoFilter);

		const query = `
		SELECT *, [dbo].[Uf_EstatusIngreso](RES.Cve_Periodo,RES.Matricula,RES.Cve_Programa,RES.Cve_PlanEstudio) Estatus
		FROM
			(SELECT DISTINCT
				INP.Cve_Periodo,
				PRO.Cve_Programa,
				INP.Cve_PlanEstudio,
				INP.Matricula,
				A.Nombre_Abr,
				AN.CVE_NIVEL,
				PRO.CVE_DEPARTAMENTO,
				INP.Estatus_Intencion,
				A.Direccion_Alu,
				A.Colonia_Alu,
				A.Telefono_Alu,
				A.Telefono_Celular_Alu,
				A.Email_Alumno,
				A.Correo_Institucional_Alumno,
				A.Sexo,
				A.Fecha_Nacimiento,
				A.Empresa_Padre,
				P.Nombre_Periodo,
				( SELECT TOP 1 CVE_GRUPO 
					FROM GrupoAlumno G1 
					WHERE  G1.Matricula = A.Matricula 
					AND G1.Cve_Periodo = INP.Cve_Periodo 
					AND G1.CVE_PROGRAMA = APE.CVE_PROGRAMA
					AND G1.Cve_PlanEstudio = APE.Cve_PlanEstudio
					) AS Grupo		
			from IntencionPago AS INP
				INNER JOIN Programa PRO ON PRO.Cve_Programa = INP.Cve_Programa
				INNER JOIN AlumnoNivel AN ON AN.Matricula = INP.Matricula AND AN.Cve_Nivel = PRO.Cve_Nivel
				INNER JOIN AlumnoPlanEstudio APE ON APE.Matricula = INP.Matricula AND APE.Cve_Programa = INP.Cve_Programa AND APE.Cve_PlanEstudio = INP.Cve_PlanEstudio
				INNER JOIN Alumno A ON A.Matricula = INP.Matricula
				LEFT JOIN MotivoBaja MB ON MB.Motivo_Baja = APE.Motivo_Baja
				INNER JOIN Periodo P on P.Cve_Periodo = INP.Cve_Periodo
				INNER JOIN PlanEstudio PE on PE.Cve_PlanEstudio = APE.Cve_PlanEstudio
				LEFT JOIN Escuela E ON E.Cve_EscuelaPro = CAST(AN.Cve_Escuela as varchar)
				LEFT JOIN TipoCurso TC ON TC.Tipo_Curso = P.Tipo_Periodo
				LEFT JOIN Ciudad C ON C.Cve_Ciudad = A.Cve_Ciudad_Procedencia
				LEFT JOIN Estado ES ON ES.Cve_Estado = C.Cve_Estado
				LEFT JOIN PeriodoBecario PB ON PB.Cve_Periodo = INP.Cve_Periodo AND PB.Matricula = APE.Matricula
			WHERE
			TC.Curso_General = 'OD'
				AND INP.Cve_Periodo LIKE '${periodoFilter}%'
				AND (INP.Estatus_Intencion = 'PR' OR INP.Estatus_Intencion = 'PM')
				AND INP.Fecha_Alta IN (SELECT Fecha_Alta
				FROM IntencionPago
				WHERE Matricula = INP.Matricula AND Cve_Periodo = INP.Cve_Periodo)) AS RES
        `;
		try {
			const resultado = await pool.request().query(query);

			res.status(200).json({
				ok: true,
				padronUnico: resultado.recordset
			})
			pool.close();
		} catch (error) {
			res.status(500).json({
				ok: false,
				message: error
			})
		}
	} catch (error) {
		res.status(500).json
	}
}