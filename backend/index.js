
const express = require("express");
const pool = require("./db");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//paths
const AdminRoute = require("./Routes/AdminRoute");
const UserRoute = require("./Routes/UserRoute");
const StoreOwnerRoute = require("./Routes/StoreOwnerRoute");


//routes
app.use("/admin",AdminRoute);
app.use("/user",UserRoute);
app.use("/store-owner",StoreOwnerRoute);





app.get("/db", async(req, res) => {
  try{
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  }
  catch(err){
    console.error(err.message);
  }
})

app.listen(3333, () => {
  console.log("Server is running on 5555");
});

