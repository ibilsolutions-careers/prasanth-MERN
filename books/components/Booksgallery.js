import axios from "axios";
import React, { useState } from "react";

function Booksgallery() {
  const [state, setState] = useState({
    BookName: "",
    AuthourName: "",
    Edition: "",
  });
  function onSubmit(e) {
    setState = [...state[e.target.name], e.target.value];
    axios.post("http://localhost:4000/showBooks");
  }

  return (
    <>
      <div>Booksgallery</div>
      <label>BooksName:</label>
      <input type="text" name="BookName" required></input>
      <label>AuthourName:</label>
      <input type="text" name="AuthourName"required></input>
      <label>Edition:</label>
      <input type="number" name="Edition"required></input>
      <button onClick={onSubmit}>Search</button>
    </>
  );
}

export default Booksgallery;
