const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", AccountSchema);
