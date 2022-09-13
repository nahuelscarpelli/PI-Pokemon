const { Router } = require("express");
const router = Router();
const { getTypes } = require("../controllers/type.controller.js");

router.get("/", getTypes);

module.exports = router;