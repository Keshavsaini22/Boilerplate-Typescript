const { query } = require("express");
const CustomError = require("../libs/error");
const { testService } = require("../services");

exports.createTest = async (req, res) => {
  try {
    if (!res.locals.isAuthenticated)
      throw new CustomError("User not Authenticated", 400);
    const response = await testService.createTest({
      userId: req.user.ID,
      body: req.body,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.getAllTest = async (req, res) => {
  try {
    const response = await testService.getAllTests();
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.getTestByUserId = async (req, res) => {
  try {
    if (!res.locals.isAuthenticated)
      throw new CustomError("User not Authenticated", 400);
    const response = await testService.getTestByUserId({
      userId: req.user.ID,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.getTestByTestId = async (req, res) => {
  try {
    if (!res.locals.isAuthenticated)
      throw new CustomError("User not Authenticated", 400);
    const response = await testService.getTestByTestId({
      userId: req.user.ID,
      query: req.query,
    });
    return res.status(201).json(response);
  } catch (e) {
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};
