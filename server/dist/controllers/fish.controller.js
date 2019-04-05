"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mvclight_1 = require("mvclight");
let FishController = class FishController {
    registerRoutes(router) {
        router.get('/', this.get.bind(this));
    }
    get(req, res) {
        console.log('in get');
        res.json('big fish');
        res.end();
    }
};
FishController = __decorate([
    mvclight_1.controller()
], FishController);
exports.FishController = FishController;
//# sourceMappingURL=fish.controller.js.map