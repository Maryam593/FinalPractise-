import 'dotenv/config'
import express from 'express'
import { connectDB } from './db/config.js';
import syncDB from './db/init.js';
import AllRoutes from './Routes/index.js';
const appData = express();
const port = 3000;
appData.use(express.json());
appData.use(AllRoutes)
connectDB
syncDB;
syncDB().then(()=>{
    console.log("DB added")
})




//server 
appData.listen(port,()=>{
    console.log(`server is working fine for FINAL PRACTISE at port ${port}`);
})
