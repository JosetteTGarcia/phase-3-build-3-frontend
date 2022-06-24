import React, {useState} from "react";
import {TextField, Button} from '@material-ui/core';


function TopStores({onAddStore}){
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
    onAddStore(data)
  })
 }


  return(
    <div>
      <h3> Add a new Store: </h3>
      <form
      onSubmit={handleStoreSubmit}
      >
      <TextField 
        id="standard-basic" 
        label="Store" 
        name="name"
        value={newStore.name}
        onChange={handleChange}
      /> <br/>
      <TextField 
        id="standard-basic" 
        label="Type of Store" 
        name="type_of_retailer"
        value={newStore.type_of_retailer}
        onChange={handleChange}
      /> <br/> <br/>
      <Button variant="contained" color="primary" type="submit">
          Submit
      </Button>
    </form>
    </div>
  )
}

export default TopStores;