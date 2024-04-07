const express = require('express');
const router = express.Router();
router.use("/", require("./authRoute"))
module.exports = router;