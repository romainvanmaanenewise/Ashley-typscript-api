import { Connection } from "./index";

export const isClientNameIsAlreadyInDatabase = async (name: string) => {
    return new Promise((resolve, reject) => {
        Connection.query(`SELECT client.id From client WHERE client.name = "${name}"`, (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results)
        })
    });
}

export const createClient = async (name: string) => {
    return new Promise((resolve,reject) => {
        Connection.query(`INSERT INTO client(name) VALUES('${name}')`, (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        })
    });
}

export default {
    createClient,
    isClientNameIsAlreadyInDatabase
}