
require("dotenv").config()
const express =require("express");
const cors = require('cors');
const helmet = require("helmet");
const cookieParser=  require("cookie-parser"); 
const app = express();
const ConnectDB= require('./config/ConnectDB.js');
const authRoute= require("./routes/authRoute");
const companyRoute= require("./routes/companyRoute.js")
const userRoute= require("./routes/userRoute.js")
const jobRoute= require("./routes/jobRoute.js")
const appliedJob= require("./routes/AppliedRoute.js")

//middleware
app.use(helmet());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(express.json());
app.use(cookieParser());



//db 
ConnectDB();



//routes
app.use("/auth",authRoute);
app.use("/user",userRoute);
app.use("/company",companyRoute);
app.use("/job",jobRoute);
app.use("/application",appliedJob);

//port
app.listen(process.env.PORT ||1080 ,()=>{
    console.log(`Server running on this http://localhost:${process.env.PORT}`);
    
})