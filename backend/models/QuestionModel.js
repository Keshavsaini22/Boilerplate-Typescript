const mongoose = require("mongoose");
const UserModel = require("./UserModel");
const TestModel = require("./TestModel");

const QuestionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: TestModel,
      required: true,
    },
    question: {
      type: String,
      require: true,
    },
    options: [
      {
        type: String,
      },
    ],
    answer: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("questions", QuestionSchema);
