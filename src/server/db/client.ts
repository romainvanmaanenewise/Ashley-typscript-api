import { Connection } from "./index";

export const createclient = async (name: string) => {
    return new Promise((resolve,reject) => {
        Connection.query("INSERT INTO client(name) VALUES('" + name + "')", (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        })
    });
}

export default {
    createclient
}