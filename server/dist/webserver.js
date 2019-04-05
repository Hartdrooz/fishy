"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mvclight_1 = require("mvclight");
const HelloWorld_service_1 = require("./services/HelloWorld.service");
const core_1 = require("./core");
class WebServer extends mvclight_1.ExpressServer {
    setPort() {
        // Can return null in this case default value
        // will be used
        return 8080;
    }
    registerApplicationDependencies(container) {
        container
            .bind(core_1.APP_TYPE.HELLO_SERVICE)
            .to(HelloWorld_service_1.HelloWorldService)
            .inTransientScope();
    }
    errorHandler(err, req, res, next) {
    }
    setViewEngine(app) {
    }
    setStaticFolder() {
        return [];
    }
    registerMiddleware(app) { }
    setRoutes(app) { }
    initApplication(container) {
        const promise = Promise.resolve(null);
        return promise;
    }
}
exports.WebServer = WebServer;
//# sourceMappingURL=webserver.js.map