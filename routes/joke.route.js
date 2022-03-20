const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    console.log("server/routes")
    app.get("/", JokeController.index) //INDEX
    app.get("/api/jokes", JokeController.allJokes) //GETALL
    app.post("/api/jokes", JokeController.createJoke) //9 //POST CREATE
    app.get("/api/jokes/:id", JokeController.createJoke) //GET ONE
    app.put("/api/jokes/:id", JokeController.updateJoke) //UPDATE
    app.delete("/api/jokes/:id", JokeController.deleteJoke) //DELETE
}


