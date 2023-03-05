const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://sowjanya:sowjanya@cluster0.ffgonyr.mongodb.net/carrental?retryWrites=true&w=majority",
   {
    
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

connectDb();
module.exports = mongoose;
