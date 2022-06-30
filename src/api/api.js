const { Router } = require("express");

const views = require("./movies-page");

const router = Router();

router.use("/", views);

module.exports = router;
