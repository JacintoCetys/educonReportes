import sql from "mssql";


export const getConnection = async (dbSettings) => {
  try {
    const pool = await sql.connect(dbSettings);
    sql.on('error', err => {
      console.log(err);
    })
    return pool;
    
  } catch (error) {
    console.error(error);
  }
};
