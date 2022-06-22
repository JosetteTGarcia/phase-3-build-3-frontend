import React, {useState} from "react";
import {TextField, Button} from '@material-ui/core';


function TopStores(){
const [newStore, setNewStore] = useState({
  name: "",
  type_of_retailer: ""
})

const handleChange = (event) => {
  setNewStore({
    ...newStore, 
    [event.target.name]: event.target.value 
  });
};


function handleStoreSubmit(e){
  e.preventDefault();
  fetch("http://localhost:9292/stores", {
    method: 'POST',
    headers: {
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
        value={newStore.name}
        onChange={handleChange}
      /> <br/>
      <TextField 
        id="standard-basic" 
        label="store" 
        name="type_of_retailer"
        value={newStore.type_of_retailer}
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