import React, {useState} from "react";
import {TextField, Button} from '@material-ui/core';


function TopStores(){
const [newStore, setNewStore] = useState("")

const handleChange = (event) => {
  setNewStore(event.target.value);
};


function handleStoreSubmit(e){
  e.preventDefault();
  fetch("http://localhost:9292/stores", {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStore)
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
  })
 }


  return(
    <div>
      <h4> Add a new Store: </h4>
      <form
      onSubmit={handleStoreSubmit}
      >
      <TextField 
        id="standard-basic" 
        label="store" 
        name="name"
        value={newStore}
        onChange={handleChange}
      /> <br/>
      <Button variant="contained" color="primary" type="submit">
          Submit
      </Button>
    </form>
    </div>
  )
}

export default TopStores;