import  express  from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewengine"
import initWebRoutes from "./route/web"
import connectDB from "./config/connectdb"

//thu vien de su dung .env
require('dotenv').config();

let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

viewEngine(app);
initWebRoutes(app);
//connect DB
connectDB();
//lay tham so trong file .env
let port = process.env.PORT||1234;

app.listen(port,()=>{
    //callback

    console.log("Backend NodeJs is running on the port:"+port)
})