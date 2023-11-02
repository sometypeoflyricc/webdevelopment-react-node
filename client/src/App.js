import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Goal from "./components/Goal";
import GoalsCreation from "./components/GoalsCreation";

function App() {
  //Use of the useState hook to initialize a state variable notes
  const [notes, setNotes] = useState([]);

  //Fetching of data 
  useEffect(() => {
    //UseEffect hook is invoked to retrieve data from the backend, while mounting of the component (empty dependency array [])
    fetchNotes();
  }, []);

  //fetchNotes() sends a GET request to the server 
  function fetchNotes() {
    fetch("http://localhost:5000/api/notes")
     //retrieves the notes
      .then((response) => response.json())
      //usets the notes state with the received data
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error, while fetching notes:", error));
  }

  //addSpecificGoal() sends a POST request to the server to add new note
  function addSpecificGoal(newNote) {
    //It sends data in JSON format using the fetch API
    fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
     //Updates the notes state with the new note
      .then((response) => response.json())
      .then((data) => {
        setNotes((prevNotes) => [...prevNotes, data]);
      })
      .catch((error) => console.error("Error, while creating note:", error));
  }

  //deleteSpecificGoal() a DELETE request to the server
  function deleteSpecificGoal(id) {
    fetch(`http://localhost:5000/api/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      //Updates notes state with the modified data from the server
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => console.error("Error, while deleting note:", error));
  }



  //Rendering of components
 //GoalsCreation renders component for creating new goals. onAdd is prop, which is a callback function that is passed to component for handling adding a goal
 //map() iterates over the array of goals and generates <Goal /> components for each goal
  return (
    <div className="container">
      <Header />
      <div className="content">
      <GoalsCreation adding={addSpecificGoal} />
      {notes.map((goalItem, index) => {
        return (
          <Goal
            key={index}
            id={index}
            title={goalItem.titleOfGoal}
            content={goalItem.contentOfGoal}
            deleting={deleteSpecificGoal}
          />
        );
      })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;