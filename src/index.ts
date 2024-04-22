import express from'express';
import startRoutes from './routes/index'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
startRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})