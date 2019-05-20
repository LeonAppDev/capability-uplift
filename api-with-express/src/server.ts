import * as express from "express";
import retry from "./retry";

const port : number = 3000;
const server = express();

server.listen(port, () => {

    const promiseTest = () => new Promise<any>(( resolve: Function, reject: Function ) => {
        
        setTimeout(() => {
            console.log(" Execute Promise");
            reject(404);
        }, 2000);
        
    });

    retry(promiseTest, 3, 1000).then(
        (value) => {
            console.log("Print this value");
            console.log(value);
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    )
    ;
    console.log('Server is listening on port', port);
});