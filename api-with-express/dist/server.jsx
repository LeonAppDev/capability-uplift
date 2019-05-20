"use strict";
exports.__esModule = true;
var express = require("express");
var retry_1 = require("./retry");
var port = 3000;
var server = express();
server.listen(port, function () {
    var promiseTest = function () { return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(" Execute Promise");
            resolve(808);
        }, 2000);
    }); };
    retry_1["default"](promiseTest, 3, 2000).then(function (value) {
        console.log(value);
    });
    console.log("test");
    console.log('Server is listening on port', port);
});
