const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middleware/authMiddleware");
const { testController } = require("../controller");

router.post("/test", authenticateJWT, testController.createTest);
router.get("/test", authenticateJWT, testController.getTestByUserId);
router.get("/tests", testController.getAllTest);
router.get("/test/id", authenticateJWT, testController.getTestByTestId);

module.exports = router;
