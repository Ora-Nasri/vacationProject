const express = require("express");
const  mongoose  = require("mongoose");
const morgan = require('morgan')

const app = express();
const port = 3001;

var cors = require('cors')
app.use(cors()) ;

app.use(morgan("dev"));
app.use(express.json());


app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, POST, DELETE, GET");
    return res.status(200).json({});
  }
  console.log("3")
  next();
})



const hotelsRouter = require("./routes/hotelsRouter");



app.use("/api/hotels", hotelsRouter);



mongoose.connect("mongodb://127.0.0.1:27017/vacation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  })
  .then(console.log("connect to DB vacation!")); 



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

  