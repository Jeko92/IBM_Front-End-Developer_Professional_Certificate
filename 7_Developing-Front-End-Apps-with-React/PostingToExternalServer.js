const express = require("express");
const app = express();

const cors_app = require("cors");
app.use(cors_app());
const PORT = process.env.PORT || 3000;


let userCollection = [];

app.post("/user", (req,res)=>{
    let newUser = {"name":req.body.name, "gender":req.body.gender};
    userCollection.push(newUser);
    return res.send("USer successfully added");
})

app.get("/user", (req,res)=>{
    return res.send(userCollection);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});