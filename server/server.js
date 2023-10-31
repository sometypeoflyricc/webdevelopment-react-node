//Imports and Setup
// Importing Express.js framework for simplifying building in Node.js
const express = require('express');
//Importing CORS middleware, for securely responding of the API to cross-origin requests
const cors = require("cors");
//Creation of instance of Express application
const app = express()

//Middleware Setup
//Enabling requests from different origins by using the CORS middleware 
app.use(cors());
//Setting up the application to interpret incoming requests for JSON data (helpful for handling data sent in the request body) 
app.use(express.json());

//Server Setup
//Configuring the Express program to listen on port 5000
//In package.json in client folder in field proxy I have URL of the this server that proxy requests to
app.listen(5000, () => {console.log("Server started on port 5000")})

//Storage for Data
//Initializing an array for storing note objects (n-memory data store)
const notes = [];

// Endpoint for retrieving all of the notes
app.get("/api/notes", (req, res) => {
  //Notes array is returned by the server in JSON format
  res.json(notes);
});

// Endpoint for creating new note
app.post("/api/notes", (req, res) => {
  //Client sends a JSON object in the request body
  const newNote = req.body;
  //Object then pushed in notes array
  notes.push(newNote);
  //Server responds with the new note
  res.json(newNote);
});

// Endpoint for deleting the note by index
app.delete("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //Before deleting, checks if the id is a valid integer and falls inside the boundaries of the array
  if (!isNaN(id) && id >= 0 && id < notes.length) {
    notes.splice(id, 1);
  }
  //server replies with the most recent notes list
  res.json(notes);
});
