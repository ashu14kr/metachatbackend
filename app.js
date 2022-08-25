const express = require("express");
const { createServer } = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
require('dotenv').config();

const app = express();
const http = createServer(app);
const io = new Server(http);
const port = process.env.PORT || 3000;
var clients = {};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

const userroutes = require("./server/routes/user.js");
const uservideos = require("./server/routes/uservideos.js");
const userimgs = require("./server/routes/userimgs.js");
const calls = require("./server/routes/call.js");
const agoraToken = require("./server/routes/agora_token.js");
const messageconnections = require("./server/routes/message-con.js");
const matchroom = require("./server/routes/matchroom.js");
const balance = require("./server/routes/balance.js");
const following = require("./server/routes/following.js");
const block = require("./server/routes/block.js");
const gift = require("./server/routes/gift.js");
const level = require("./server/routes/levelpurchase.js");
const message = require("./server/routes/message.js");
const like = require("./server/routes/likes.js");
const rankings = require("./server/routes/ranking.js");
const callrecords = require("./server/routes/callrecors.js");

app.use("/", userroutes);
app.use("/video", uservideos);
app.use("/imgs", userimgs);
app.use("/calls", calls);
app.use("/agora", agoraToken);
app.use("/connect", messageconnections);
app.use("/room", matchroom);
app.use("/balance", balance);
app.use("/followers", following);
app.use("/block", block);
app.use("/gift", gift);
app.use("/level", level);
app.use("/message", message);
app.use("/likes", like);
app.use("/rankings", rankings);
app.use("/callrecords", callrecords);

app.get("/", (req, res) => {
    res.send("Server is good!!");
});

io.on("connection", (socket) => {
    console.log("connetetd");
    console.log(socket.id);
    socket.on("signin", (id) => {
        console.log(id);
        clients[id] = socket;
        console.log(clients);
    });
    socket.on("msg", (msg) => {
        console.log(msg);
        let targetId = msg.targetId;
    if (clients[targetId]) {
        clients[targetId].emit("msg", msg);
    }
    });
});


http.listen(port, () => {
    console.log("done");
})

// app.listen(port, '0.0.0.0' , () => console.log(`server is loaded on ${port}`));





    // console.log(socket.id, "has joined");
    // socket.on("/test", (msg)=>{
    //     console.log(msg);
    // });
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












           

