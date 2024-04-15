const express = require("express");
const router = express.Router();

router.use("/", require("./authRoute"));
router.use("/", require("./testRoute"));
router.use("/", require("./questionRoute"));
module.exports = router;
