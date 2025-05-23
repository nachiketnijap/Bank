const Account = require("../models/Account");
const User = require("../models/User");
const transaction = async (req, res) => {
  try {
    const { transactionType, amount } = req.body;
    if (transactionType == "withdraw") {
      const user = await User.findOne(
        { _id: req.userInfo.userId },
        { balance: 1, _id: 0 }
      );

      const balance=user?.balance

      if(balance<amount){
        return res.status(400).json({
            message:"Insufficient fund"
        })
      }
    }

    if (transactionType == "deposite") {
      await User.updateOne(
        { _id: req.userInfo.userId },
        { $inc: { balance: amount } }
      );
    } else {
      await User.updateOne(
        { _id: req.userInfo.userId },
        { $inc: { balance: -amount } }
      );
    }

    const transaction = new Account({
      transactedBy: req.userInfo.userId,
      transactionType,
      amount,
    });

    await transaction.save();

    if (transaction) {
      res.status(201).json({
        success: true,
        message: "Transaction successfull",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Transaction Failed",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};

const transactionPerUser = async (req, res) => {
  try {
    const userTransaction = await Account.find(
      { transactedBy: req.userInfo.userId },
      { amount: 1, transactionType: 1, createdAt: 1 }
    );
    if (userTransaction) {
      res.status(200).json({
        data: userTransaction,
        success: true,
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};
module.exports = { transaction, transactionPerUser };

// if (transactionType == "withdraw") {
//     const userDeposite = await Account.find({
//       transactedBy: req.userInfo.userId,
//       transactionType: "deposite",
//     });

//     const totalDeposite = userDeposite.reduce(
//       (sum, doc) => sum + doc.amount,
//       0
//     );
//     console.log("total deposite::" + totalDeposite);

//     const userWithdrawal = await Account.find({
//       transactedBy: req.userInfo.userId,
//       transactionType: "withdraw",
//     });

//     const totalwithdrawal = userWithdrawal.reduce(
//       (sum, doc) => sum + doc.amount,
//       0
//     );
//     console.log("total withdrawal::" + totalwithdrawal);

//     const balance = totalDeposite - totalwithdrawal;
//     console.log("balance::" + balance);

//     if (amount > balance) {
//       return res.status(201).json({
//         success: true,
//         message: "Insufficient funds",
//       });
//     }
//   }
