import * as express from 'express';
import DB from "./db"

const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.post('/api/client/createclient', async (req, res, next) => {
    try{
        let clientName = req.body.name;
        let doesClientExist = await DB.client.isClientNameIsAlreadyInDatabase(clientName);
        if(Object.keys(doesClientExist).length == 0){
            let result = await DB.client.createClient(clientName);
            const ResultOfCreateClientRequest: theResultOfCreateClientRequest = {clientId:result['insertId'] , resultType:'created'} 
            res.json(ResultOfCreateClientRequest);
        }else{
            const ResultOfCreateClientRequest: theResultOfCreateClientRequest = {clientId:doesClientExist[0]["id"] , resultType:'exists'} 
            res.json(ResultOfCreateClientRequest);
        }
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    } 
});

interface theResultOfCreateClientRequest {
    clientId: number;
    resultType: string;
}

export default router;