require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes =require("./routes/auth-route")
const accounRoutes =require("./routes/account-route")
const bankerRoutes =require("./routes/bank-route")
connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/account",accounRoutes);
app.use("/api/banker",bankerRoutes)

app.listen(PORT, () => {
  console.log(`Server is now listeining to PORT ${PORT}`);
});