const CustomError = require("../libs/error");
const TestModel = require("../models/TestModel");

exports.createTest = async (payload) => {
  const { testname, duration, instructions, eachqMarks } = payload.body;
  const userId = payload.userId;
  if (!testname || !duration || !instructions || !eachqMarks)
    throw new CustomError("Body is not complete", 401);
  const data = await TestModel.create({
    userId,
    testname,
    duration,
    instructions,
    eachqMarks,
  });
  console.log("✌️data --->", data);
  return data;
};

exports.getAllTests = async () => {
  const data = await TestModel.find({});
  console.log("✌️data --->", data);
  return data;
};

exports.getTestByUserId = async (payload) => {
  const userId = payload.userId;
  const data = await TestModel.find({ userId });
  console.log("✌️data --->", data);
  return data;
};

exports.getTestByTestId = async (payload) => {
  const testId = payload.query.testId;
  if (!testId) throw new CustomError("Test id is required", 401);
  const data = await TestModel.findById(testId);
  if (!data) throw new CustomError("Wrong Id", 401);
  return data;
};
