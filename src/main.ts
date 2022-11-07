import express from 'express';
import 'dotenv/config'
import App from './app'

//const PORT = process.env.APP_PORT;

//const app = express();

App.listen(process.env.APP_PORT as unknown as number | 3001);