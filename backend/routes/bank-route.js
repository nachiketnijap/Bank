const express = require("express");
// const authMiddleware= require('../middleware/auth-middleware')
const { getAllAccount } = require("../controllers/banker-controller");
const router = express.Router();

router.get("/get-all-account",getAllAccount)



module.exports = router;