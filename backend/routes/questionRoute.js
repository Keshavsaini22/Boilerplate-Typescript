const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middleware/authMiddleware");
const { questionController } = require("../controller");

router.post("/question", authenticateJWT, questionController.createQuestion);
router.get("/question", authenticateJWT, questionController.getQuestionById);
router.get("/question/text/:testId", questionController.getQuestionByTest);
router.delete(
  "/question/:id",
  authenticateJWT,
  questionController.deleteQuestion
);
router.put("/question/:id", authenticateJWT, questionController.updateQuestion);
module.exports = router;
