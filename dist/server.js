"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const settings_1 = require("./settings");
app_1.default.listen(settings_1.default.LISTEN_PORT, () => {
    console.log("Express server listen on port: ", settings_1.default.LISTEN_PORT);
}); // App.listen
//# sourceMappingURL=server.js.map