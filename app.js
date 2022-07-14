const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userroutes = require("./server/routes/user.js");

app.use("/", userroutes);

app.get("/", (req, res) => {
    res.send("Server is good!!");
});




app.listen(port, () => console.log(`server is loaded on ${port}`));