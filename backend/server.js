require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes =require("./routes/auth-route")


connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());


app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`Server is now listeining to PORT ${PORT}`);
});