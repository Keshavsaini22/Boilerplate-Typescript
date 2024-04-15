const CustomError = require("../libs/error");
const QuestionModel = require("../models/QuestionModel");

exports.createQuestion = async (payload) => {
  const { testId, question, options, answer } = payload.body;
  const userId = payload.userId;
  if (!testId || !question || !options || !answer)
    throw new CustomError("Body is not complete", 401);
  const data = await QuestionModel.create({
    userId,
    testId,
    question,
    options,
    answer,
  });
  console.log("✌️data --->", data);
  return data;
};

exports.getQuestionByTest = async (payload) => {
  const { testId } = payload.params;
  if (!testId) throw new CustomError("Test id is required", 401);
  const data = await QuestionModel.find({ testId });
  return data;
};

exports.getQuestionById = async (payload) => {
  const queId = payload.query.queId;
  if (!queId) throw new CustomError("Test id is required", 401);
  const data = await TestModel.findById(queId);
  if (!data) throw new CustomError("Wrong Id", 401);
  return data;
};

exports.deleteQuestion = async (payload) => {
  const { id } = payload.params;
  const data = await QuestionModel.findByIdAndDelete(id);
  return data;
};

exports.updateQuestion = async (payload) => {
  const { id } = payload.params;
  const body = payload.body;
console.log('✌️body --->', body);
  const data = await QuestionModel.findByIdAndUpdate(
    id,
    { ...body },
    { new: true }
  );
  return data;
};
