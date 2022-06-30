// import express using a router class
const { Router } = require("express");

// import controller functions from api file
const { getMovies, getMoviesById } = require("../controllers/movies");

// create a router instance
const router = Router();

//routers with middleware functions
router.get("/", getNotes);
router.delete("/:id", getMoviesById);

// export file
module.exports = router;
