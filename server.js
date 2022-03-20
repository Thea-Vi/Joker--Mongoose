// 1
const express = require("express");
const app = express();
port = 8000;

// 1
// 2 configure config folder first then do require
// CHECK THE SERVER IF connected - established a connection to the database
require("./config/mongoose.config");

// 3 create model - model file

// 1 configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
// 4 write below then 5 write on controller file then 6 write on route.js
// after route.js file check if localhost:8000 runs
// console.log("server.js : before routes")
const Routes = require("./routes/joke.route")
Routes(app)

// 1
// listen to the port
app.listen(port, () => console.log(`Listening on port: ${port}`));
