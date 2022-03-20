const Joke = require("../models/joke.model");

module.exports.index = (req, res) => {
  res.json("Hello");
};

// ------ 8 WRITE THE ROUTE ONE BY ONE
// 7 do the CRUD

// FIND ALL / GET ALL JOKES ----GET
module.exports.allJokes = (req, res) => {
  // console.log("server/controller")
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong" }));
};

// CREATE JOKE---POST #8

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) =>
      res.json({
        result: newJoke,
      })
    )
    .catch((err) =>
      res.json({
        message: "Something went wrong",
        error: err,
      })
    );
};

//FIND ONE -- GET
module.exports.oneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((joke) => json({ joke: joke }))
    .catch((err) => res.json({ message: "Something went wrong" }));
};

// UPDATE A REMINDER ----/PUT-----
// UPDATE (FINDONE + CREATE)
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((joke) => res.json({ joke: joke }))
    .catch((err) => res.json({ message: "Something went worng", error: err }));
};

// DELETE A REMINDER
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something is wrong", error: err }));
};
