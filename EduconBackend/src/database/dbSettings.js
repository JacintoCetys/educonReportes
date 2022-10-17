const database = 'EDUCON';

export const dbCampus = (campus) => {
  console.log(`CAMPUS: ${campus}`);
  switch (campus) {
    case 'mexicali':
      return {
        user: 'JacintoRamirez',
        password: 'Jara.2021M',
        server: '10.1.4.100',
        database: database,
        options: {
          encrypt: false,
          trustServiceCerticate: true,
          enableArithAbort: true
        },
        connectionTimeout: 30000,
        requestTimeout: 30000,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        }
      };
    case 'tijuana':
      return {
        user: 'JacintoRamirez',
        password: 'Jara.2021T',
        server: '10.10.0.9',
        database: database,
        options: {
          encrypt: false,
          trustServiceCerticate: true,
          enableArithAbort: true
        },
        connectionTimeout: 30000,
        requestTimeout: 30000,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        }
      };
    case 'ensenada':
      return {
        user: 'JacintoRamirez',
        password: 'Jara.2021E',
        server: '10.20.0.24',
        database: database,
        options: {
          encrypt: false,
          trustServiceCerticate: true,
          enableArithAbort: true
        },
        connectionTimeout: 30000,
        requestTimeout: 30000,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        }
      };

    case 'prueba':
      return {
        user: 'JacintoRamirez',
        password: 'Jara.2021',
        server: '10.1.4.86',
        database: database,
        options: {
          encrypt: false,
          trustServiceCerticate: true,
          enableArithAbort: true
        },
        connectionTimeout: 30000,
        requestTimeout: 30000,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        }
      };

    default:
      return '';
  }

};
