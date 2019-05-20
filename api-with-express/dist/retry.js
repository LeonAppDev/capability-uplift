"use strict";
exports.__esModule = true;
var retry = function (fn, retries, timeOut) {
    return new Promise(function (resolve, reject) {
        var attempt = function () { return fn().then(function (value) {
            resolve(value);
        })["catch"](function (error) {
            retries--;
            if (retries > 0) {
                setTimeout(function () { attempt(); }, timeOut);
            }
            else {
                reject(error);
            }
        }); };
        attempt();
    });
};
exports["default"] = retry;
