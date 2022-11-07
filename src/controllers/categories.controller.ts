import { Router, json, Request, Response } from "express";
import categoriesService from "../services/categories.service";

class CategoriesController {

    router = Router();

    constructor(){
        this.initRoutes();
    }

    initRoutes(){

        this.router.get('/categories', categoriesService.getList);
        this.router.get('/categories/:id',categoriesService.getOne);
        this.router.post('/categories', categoriesService.create);
        this.router.patch('/categories/:id', categoriesService.update);
        this.router.delete('/categories/:id', categoriesService.delete);

    }

}


export default new CategoriesController();