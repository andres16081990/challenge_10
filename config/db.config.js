'use strict'

const mongooose = require('mongoose');


mongooose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongooose.connection.on('error', ()=> console.error('Error in DB connection'));
mongooose.connection.once('open', ()=> console.log('db Connected'));
