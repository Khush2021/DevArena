import { ProblemModel } from "../models/index.js";

export const getProblems = async (req, res, next) => {
  try {
    const problems = await ProblemModel.find();
    res.json(problems);
  } catch (error) {
    next(error);
  }
};

export const setProblem = async (req, res, next) => {
  const {
    name,
    description,
    inputFormat,
    outputFormat,
    sampleTestCases,
    constraints,
    correctCode,
  } = req.body;

  const problem = new ProblemModel({
    name,
    description,
    inputFormat,
    outputFormat,
    sampleTestCases,
    constraints,
    correctCode,
  });
  try {
    const newProblem = await problem.save();
    res.json(newProblem);
  } catch (error) {
    next(error);
  }
};
