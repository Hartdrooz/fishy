import { IController, controller } from 'mvclight';
import { Router, Request, Response } from 'express';

@controller()
export class FishController implements IController {
    registerRoutes(router: Router): void {
        router.get('/',this.get.bind(this));
    }

    get(req:Request,res:Response):void {
        console.log('in get');
        res.json('big fish');
        res.end();
    }
}