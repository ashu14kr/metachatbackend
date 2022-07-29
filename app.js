const express = require("express");
var http = require("http");
const cors = require("cors");
require('dotenv').config();

const app = express();
var server = http.createServer(app);
var io = require("socket.io")(server);
const port = process.env.PORT || 3000;
var clients = {};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

io.on("connection", (socket) => {
    console.log("connetetd");
    console.log(socket.id, "has joined");
    socket.on("/test", (msg)=>{
        console.log(msg);
    });
    // socket.on("signin", (id) => {
    //   console.log(id);
    //   clients[id] = socket;
    //   console.log(clients);
    // });
    // socket.on("message", (msg) => {
    //   console.log(msg);
    //   let targetId = msg.targetId;
    //   if (clients[targetId]) clients[targetId].emit("message", msg);
    // });
  });

const userroutes = require("./server/routes/user.js");
const uservideos = require("./server/routes/uservideos.js");
const userimgs = require("./server/routes/userimgs.js");
const calls = require("./server/routes/call.js");
const agoraToken = require("./server/routes/agora_token.js");

app.use("/", userroutes);
app.use("/video", uservideos);
app.use("/imgs", userimgs);
app.use("/calls", calls);
app.use("/agora", agoraToken);

app.get("/", (req, res) => {
    res.send("Server is good!!");
});


app.listen(port, '0.0.0.0', () => console.log(`server is loaded on ${port}`));