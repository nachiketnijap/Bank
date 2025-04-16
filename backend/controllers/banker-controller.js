const User=require("../models/User")
const getAllAccount =async(req,res)=>{

    try {
        users=await User.find({role:"customer"},{username:1, email:1, createdAt:1, balance:1})
        res.status(200).json({
            success:true,
            users
        })          
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
}

module.exports={getAllAccount}



// const result = await Account.aggregate([
//   {
//     $group: {
//       _id: "$transactedBy",
//       totalDeposit: {
//         $sum: {
//           $cond: [{ $eq: ["$transactionType", "deposite"] }, "$amount", 0]
//         }
//       },
//       totalWithdraw: {
//         $sum: {
//           $cond: [{ $eq: ["$transactionType", "withdraw"] }, "$amount", 0]
//         }
//       }
//     }
//   },
//   {
//     $addFields: {
//       balance: { $subtract: ["$totalDeposit", "$totalWithdraw"] }
//     }
//   },
//   {
//     $lookup: {
//       from: "users", // collection name in lowercase (not model name)
//       localField: "_id",
//       foreignField: "_id",
//       as: "user"
//     }
//   },
//   {
//     $unwind: "$user"
//   },
//   {
//     $project: {
//       _id: 0,
//       username: "$user.username",
//       email: "$user.email",
//       balance: 1
//     }
//   }
// ]);