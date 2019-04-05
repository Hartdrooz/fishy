import { ExpressServer } from 'mvclight';
import { Container } from 'inversify';
import { Request, Response, NextFunction, Express } from 'express';
export declare class WebServer extends ExpressServer {
    setPort(): number;
    registerApplicationDependencies(container: Container): void;
    errorHandler(err: any, req: Request, res: Response, next: NextFunction): void;
    setViewEngine(app: Express): void;
    setStaticFolder(): Array<string>;
    registerMiddleware(app: Express): void;
    setRoutes(app: Express): void;
    initApplication(container: Container): Promise<Error>;
}
