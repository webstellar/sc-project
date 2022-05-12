const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Setting up config file
dotenv.config({ path: "backend/config/config.env" });

//Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.group(
    `sever started on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
