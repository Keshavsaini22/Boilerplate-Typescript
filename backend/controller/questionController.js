const { query } = require("express");
const CustomError = require("../libs/error");
const { questionService } = require("../services");

exports.createQuestion = async (req, res) => {
  try {
    if (!res.locals.isAuthenticated)
      throw new CustomError("User not Authenticated", 400);
    const response = await questionService.createQuestion({
      userId: req.user.ID,
      body: req.body,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.getQuestionByTest = async (req, res) => {
  try {
    const response = await questionService.getQuestionByTest({
      params: req.params,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    if (!res.locals.isAuthenticated)
      throw new CustomError("User not Authenticated", 400);
    const response = await questionService.getQuestionById({
      query: req.query,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    if (!res.locals.isAuthenticated)
      throw new CustomError("User not Authenticated", 400);
    const response = await questionService.deleteQuestion({
      params: req.params,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    if (!res.locals.isAuthenticated)
      throw new CustomError("User not Authenticated", 400);
    const response = await questionService.updateQuestion({
      params: req.params,
      body: req.body,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};
