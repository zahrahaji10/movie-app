// import express using a router class
const { Router } = require("express");

// import controller functions from view file
const { renderHomePage } = require("../controllers/view");

// create a router instance
const router = Router();

//routers with middleware functions
router.get("/*", renderHomePage);

// export file
module.exports = router;
