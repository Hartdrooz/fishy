import { IController } from 'mvclight';
import { Router, Request, Response } from 'express';
export declare class FishController implements IController {
    registerRoutes(router: Router): void;
    get(req: Request, res: Response): void;
}
