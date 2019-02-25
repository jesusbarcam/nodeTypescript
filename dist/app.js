"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.config();
    } // Constructor
    /**
     * @method
     * @private
     * @description
     */
    config() {
        // Support application/json type post data
        this.app.use(bodyparser.json());
        // Support application/x-www-form-urlencoded post data
        this.app.use(bodyparser.urlencoded({ extended: false }));
    } // Config
} // App
exports.default = new App().app;
//# sourceMappingURL=app.js.map