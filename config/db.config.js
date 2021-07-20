'use strict'

const mongooose = require('mongoose');

const URL = 'mongodb://localhost:27017/challenge_10'

mongooose.connect(process.env.MONGO_DB_URL || URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongooose.connection.on('error', ()=> console.error('Error in DB connection'));
mongooose.connection.once('open', ()=> console.log('db Connected'));
