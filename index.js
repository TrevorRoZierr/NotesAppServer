//import dependencies:
require("dotenv").config()
const cors = require("cors")
const express = require("express")
const connectDB = require("./connectDB");
const Notes = require("./model/Notes");

//Instance of express:
const app = express()

//Middleware:
connectDB();

//Use of app:
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//PORT to listen on:
const PORT = process.env.PORT || 8000;

//Routes:

//GET all:
app.get("/api/notes", async (req,res) => {
    try {
        const data = await Notes.find({});

        if(!data){
            throw new Error('An error occured.');
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'An error occured.'});
    }
})

//GET by ID:
app.get("/api/notes/:id", async (req,res) => {
    try {
        const noteID = req.params.id;
        const data = await Notes.findById(noteID);

        if(!data){
            throw new Error('An error occured.');
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'An error occured.'});
    }
})

//Create one:
app.post("/api/notes", async (req,res) => {
    try {
        const { title, description } = req.body;
        const data = await Notes.create({ title, description });

        if(!data){
            throw new Error('An error occured.');
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'An error occured.'});
    }
})

//Update one:
app.put("/api/notes/:id", async (req,res) => {
    try {
        const noteID = req.params.id;
        const { title, description } = req.body;
        const data = await Notes.findByIdAndUpdate(noteID, { title, description });

        if(!data){
            throw new Error('An error occured.');
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'An error occured.'});
    }
})

//Delete one:
app.delete("/api/notes/:id", async (req,res) => {
    try {
        const noteID = req.params.id;
        const { title, description } = req.body;
        const data = await Notes.findByIdAndDelete(noteID, { title, description });

        if(!data){
            throw new Error('An error occured.');
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: 'An error occured.'});
    }
})


app.get("/", (req,res) => {
    res.json("Hello mate!")
})

app.get("*", (req,res) => {
    res.sendStatus(400)
})

//Listen on Port:
app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`);
})