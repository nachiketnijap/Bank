const express = require("express");
const authMiddleware= require('../middleware/auth-middleware')
const {
  transaction,transactionPerUser
} = require("../controllers/account-controller");
const router = express.Router();


router.post("/transaction",authMiddleware,transaction );
router.get("/transactions",authMiddleware,transactionPerUser );



module.exports = router;