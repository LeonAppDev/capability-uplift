"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const retry_1 = require("./retry");
const port = 3000;
const server = express();
server.listen(port, () => {
    const promiseTest = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" Execute Promise");
            //resolve(808);
            reject(404);
        }, 2000);
    });
    retry_1.default(promiseTest, 3, 1000).then((value) => {
        console.log("Print this value");
        console.log(value);
    }).catch((error) => {
        console.log(error);
    });
    console.log('Server is listening on port', port);
});
//# sourceMappingURL=server.js.map