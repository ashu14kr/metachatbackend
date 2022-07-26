const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

const userroutes = require("./server/routes/user.js");
const uservideos = require("./server/routes/uservideos.js");
const userimgs = require("./server/routes/userimgs.js");

app.use("/", userroutes);
app.use("/video", uservideos);
app.use("/imgs", userimgs);

app.get("/", (req, res) => {
    res.send("Server is good!!");
});


app.listen(port, () => console.log(`server is loaded on ${port}`));