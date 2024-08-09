import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const problemSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "UserModel",
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    inputFormat: {
      type: String,
      required: true,
    },
    outputFormat: {
      type: String,
      required: true,
    },
    sampleTestCases: [
      {
        input: {
          type: String,
          required: true,
        },
        output: {
          type: String,
          required: true,
        },
      },
    ],
    constraints: {
      type: String,
      required: true,
    },
    correctCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProblemModel =
  mongoose.models.ProblemModel || mongoose.model("ProblemModel", problemSchema);

export default ProblemModel;
