import React, {useState} from "react";
import {TextField, Button} from '@material-ui/core';


function TopCatgories(){
const [newCategory, setNewCategory] = useState("")

const handleChange = (event) => {
  setNewCategory(event.target.value);
};


function handleCategorySubmit(e){
  e.preventDefault();
  fetch("http://localhost:9292/categories", {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory)
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
  })
 }


  return(
    <div>
      <h4> Add a new Category: </h4>
      <form
      onSubmit={handleCategorySubmit}
      >
      <TextField 
        id="standard-basic" 
        label="category" 
        name="category_type"
        value={newCategory}
        onChange={handleChange}
      /> <br/>
      <Button variant="contained" color="primary" type="submit">
          Submit
      </Button>
    </form>
    </div>
  )
}

export default TopCatgories;