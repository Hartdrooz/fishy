import { IController } from 'mvclight';
import { Router } from 'express';
import { IHelloWorldService } from './../services/HelloWorld.service';
export declare class HomeController implements IController {
    private helloWorldService;
    constructor(helloWorldService: IHelloWorldService);
    registerRoutes(router: Router): void;
    private get;
}
