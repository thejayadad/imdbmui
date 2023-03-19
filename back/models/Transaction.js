const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      requires: [true, "cat is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
    date: {
      type: Date,
      required: [true, "data is required"],
    },
  },
  { timestamps: true }
);

const Transection = mongoose.model("Transactions", TransactionSchema);
module.exports = Transection;