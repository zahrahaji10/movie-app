const { Router } = require("express");

const views = require("./api");

const router = Router();

router.use("/", views);

module.exports = router;
