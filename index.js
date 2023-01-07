const express = require("express");
const app = express();
const path = require("path");




app.use(express.static(path.join(__dirname,"contents")));
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"contents/index.html"));
})





app.listen(3000, () => {
    console.log("Running Port 3000");
})