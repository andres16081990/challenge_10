'use strict'
// enviorment variable
require('dotenv').config();


const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const { extname } = require('path');
const path = require('path');
const port = 3000;

//db connection
require('./config/db.config')

//routes
const routes = require('./routes/routes')

//express configuration
app.use(express.urlencoded({extended:true}));

//set view Engine

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    layoutsDir: path.join(app.get('views'),'layout'),
    extname : '.hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.set('view engine','.hbs');

app.use('/', routes);


app.listen(process.env.PORT || port ,console.log(`App running in port ${process.env.PORT || port}`))