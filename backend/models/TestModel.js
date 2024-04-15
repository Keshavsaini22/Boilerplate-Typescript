const mongoose = require("mongoose");
const UserModel = require("./UserModel");

const TestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },

    testname: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
      require: true,
    },
    instructions: {
      type: String,
      require: true,
    },
    eachqMarks: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tests", TestSchema);
