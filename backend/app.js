const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
const port = 3001;
app.use(express.json());


const hotelsRouter = require("./routes/hotelsRouter");
app.use("/api/hotels", hotelsRouter);

mongoose.connect("mongodb://localhost:27017/vacation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  })
  .then(console.log("connect to DB vacation!")); 



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  