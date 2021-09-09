import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Box from "@material-ui/core/Box";
import ToDoItems from "./ToDoItems";

const App = () => {
  const [item, setItem] = useState("");
  const [displayItem, setDisplayItem] = useState([]);

  const display = () => {
    setDisplayItem((olditems) => {
      return [...olditems, item];
    });
    setItem("");
  };
  const deleteItem = (id) => {
    setDisplayItem((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          paddingTop: "1px",
          minHeight: "100vh",
          margin: "0px",
        }}
      >
        <h1
          style={{
            backgroundColor: "#7e57c2",
            color: "white",
            fontSize: "30px",
            textAlign: "center",
            padding: "20px",
            fontFamily: "sans-serif",
          }}
        >
          To Do List
        </h1>
        <br />
        <Box display="flex" justifyContent="center">
          <TextField
            id="standard-basic"
            label="Enter Note"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
          &nbsp;&nbsp;
          <Fab
            style={{ backgroundColor: "#7e57c2", color: "white" }}
            aria-label="add"
            onClick={display}
          >
            <NoteAddIcon />
          </Fab>
        </Box>
        <br />
        <ol>
          {displayItem.map((element, index) => {
            return (
              <ToDoItems
                key={index}
                id={index}
                onDelete={deleteItem}
                addedItem={element}
              />
            );
          })}
        </ol>
      </Paper>
    </>
  );
};
export default App;
