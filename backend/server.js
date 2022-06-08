//it will be our entry point as defined in npm init in package.json file
const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv");
dotenv.config();


//express k obj banaya
const app = express();

        //endpoint here is just "/"
app.get("/",(req,res)=>{
    res.send("Data mil gya aur hamari api chal rhi h badiya")
})

app.get("/api/notes",(req,res)=>{
    //res.send(notes);
    //You can send JSON to the client by using response.json() It accepts an object or array, and converts it to JSON before sending it:
    res.json(notes);
})

app.get("/api/notes/:id",(req,res)=>{
    note = notes.find((n)=> n._id===req.params.id)
    res.send(note)
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`app started on port ${PORT}`))