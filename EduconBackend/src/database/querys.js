
export const querys = {
    getAlumnoMatricula: "SELECT RTRIM(Matricula) AS Matricula, RTRIM(nombreusuario) AS [Usuario], RTRIM(password) AS [Contraseña], Nombre_Abr AS Nombre, email, email_empresa FROM personaportal WHERE nombreusuario like '%22000%'",
    // getAlumnoMatriculaById: `SELECT RTRIM(Matricula) AS Matricula, RTRIM(nombreusuario) AS [Usuario], RTRIM(password) AS [Contraseña], Nombre_Abr AS Nombre, email, email_empresa FROM personaportal WHERE nombreusuario like '%${matricula}%'`
}