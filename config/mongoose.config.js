// 2
const mongoose = require('mongoose');

// 2 copy from platform
// name the DATABASE
mongoose
  .connect("mongodb://localhost/joke_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
