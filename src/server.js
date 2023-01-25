import express from 'express';
import props from './config/properties';
import db from './config/db';
import bodyParser from 'body-parser';

import clinicalRoutes from './routes'; //routes

db();


var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(props.PORT,(err)=>{
    if(err)console.log(err)
    else console.log("Application Started on port " + props.PORT)
 })
//router mapings
var clinicalRouter = express.Router() //get router
clinicalRoutes(clinicalRouter)

app.use('/clinicalsapi', clinicalRouter)
