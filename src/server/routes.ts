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
    let clientname = req.body.name;
    try{
        DB.client.createClient(clientname);
        res.json(`${clientname} has been created`);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    } 
});

export default router;