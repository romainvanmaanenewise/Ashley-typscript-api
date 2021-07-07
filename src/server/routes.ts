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
            DB.client.createClient(clientName);
            res.json(`${clientName} has been created`);
        }else{
            res.json(`${clientName} already exist`);
        }
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    } 
});

export default router;