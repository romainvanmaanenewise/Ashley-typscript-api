import * as mysql from 'mysql';
import config from '../config';

import self from './self';
import client from './client';

export const Connection = mysql.createConnection(config.mysql);
Connection.connect(err => {
    if(err) console.log(err);
})

export default {
    self,
    client
}