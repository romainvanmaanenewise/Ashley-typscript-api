import * as express from 'express';
import DB from "./db"

const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.post('/api/client/createclient', function(req, res){
    let clientname = req.body.name;
    try{
        DB.client.createclient(clientname);
        res.json(`${clientname} has been created`);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    } 
});



export default router;