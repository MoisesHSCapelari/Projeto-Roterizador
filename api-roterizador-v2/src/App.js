import dotenv from 'dotenv';
dotenv.config();
import './Database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import HomeRoutes from './Routes/HomeRoutes';
import TripsRoutes from './Routes/TripsRoutes';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acesso restrito'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', HomeRoutes);
    this.app.use('/routes', TripsRoutes);
  }
}

export default new App().app;
