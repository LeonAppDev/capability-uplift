"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retry = (fn, retries, timeOut) => {
    return new Promise((resolve, reject) => {
        const attempt = () => fn().then((value) => {
            resolve(value);
        }).catch((error) => {
            retries--;
            if (retries > 0) {
                setTimeout(() => { attempt(); }, timeOut);
            }
            else {
                reject(error);
            }
        });
        attempt();
    });
};
exports.default = retry;
//# sourceMappingURL=retry.js.map