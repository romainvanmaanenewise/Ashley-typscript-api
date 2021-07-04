import * as express from 'express';
import apiRouter from './routes';

const app = express();
var cors = require('cors');
app.use(cors())

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
