import express from 'express';
import 'dotenv/config'
import App from './app'

//const app = express();

App.listen(process.env.APP_PORT as unknown as number | 3001);