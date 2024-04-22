import bodyParser from 'body-parser';
import {Express} from 'express';
import magicItemRouter   from './magicItemRoute' ;
import magicMoverRouter from './magicMoverRoute';
import activityLogRouter from './activityLogRoute'; 

export = function (app : Express){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api/magicItem',magicItemRouter)
    app.use('/api/magicMover',magicMoverRouter)
    app.use('/api/activityLog',activityLogRouter)
  
}