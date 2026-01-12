let expres=require("express");
let app=expres();

app.use(expres.json());
app.get("/student-read",(req,res)=>{
    res.send("student view api");
});

app.get("/student-update",(req,res)=>{
    res.send("student update api");
});

app.get("/student-write",(req,res)=>{
    res.send("student write api");
});


app.post("/student-insert",async(req,res)=>{
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students");
    res.send("student insert api version 5");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});