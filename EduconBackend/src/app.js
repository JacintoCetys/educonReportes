import express from "express";
import config from "./config";
import cors from 'cors'
import padroUnico from './routes/padronUnico.routes';

const app = express();

// settings
app.set("port", config.port);

//middlewares
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(padroUnico);

export default app;
