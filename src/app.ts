import express, { json, Request, Response} from 'express';
import Connection from './database/connection';
import * as dotenv from 'dotenv';
import categoriesController from './controllers/categories.controller';

class App {

    public express: express.Application;
    private connection: Connection | undefined;

    constructor(){
        this.express = express();
        this.middlewares();
        this.db();
        this.routes();
    }

    middlewares(){
        this.express.use(json());
    }

    routes(){
        this.express.use('/api', categoriesController.router);
    }

    db(){
        this.connection = new Connection();
        this.connection.connection
        .sync()
        .then(() => {
            console.log('Database is Connected');
        })
        .catch((err) => {
            console.log(`Error`, err);
        });
    }

    listen(port: number) {
        this.express.listen(port, () => console.log(`Server run in : http:localhost:${port}`))
    }

}

export default new App();