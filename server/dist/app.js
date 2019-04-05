"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers need to be imported to be discovered by the metadata
require("./controllers/HomeController");
require("./controllers/fish.controller");
// Import web server
const webserver_1 = require("./webserver");
// Only those line are needed to start the server
const server = new webserver_1.WebServer();
server.start();
//# sourceMappingURL=app.js.map