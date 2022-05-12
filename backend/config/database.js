//mongoose is used to connect Node app to MongoDB
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`MongoDB Database connect with HOST: ${con.connection.host}`);
    });
};

module.exports = connectDatabase;
