// import express using a router class
const { Router } = require("express");

//import notes
const notes = require("./movies");

// create a router instance
const router = Router();

//routers with middleware functions
router.use("/movies", notes);

// export file
module.exports = router;
