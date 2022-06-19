import React, {useEffect, useState} from "react";
import {TextField, Select, FormControl, MenuItem, InputLabel, Box, makeStyles, FormGroup} from '@material-ui/core';
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from "@material-ui/pickers";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function PaymentSubmitForm(){
  const classes = useStyles();
  const [formData, setFormData] = useState({
    amount: "",
    date_paid: "",
    description: "",
    store: "",
    is_need: false,
    category_id: "",
    store_id: "",
  })

  function handleChange(e){
    if(e.target.name === "isNeeded"){
     setFormData({
       ...formData,
         is_needed: !formData.is_need
     }) 
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
   }

   function postNewCategory(e){
    e.preventDefault();
    fetch("http://localhost:9292/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.category)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  }

  function postNewStore(e){
    e.preventDefault();
    fetch("http://localhost:9292/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.category)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  }

   function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:9292/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  }



  return (
  <div>
      <h1> Submit Your Payment! </h1>
  <FormGroup className={classes.formControl}>
  <TextField 
    id="standard-basic" 
    label="Amount" 
    name="amount"
    value={formData.amount}
    onChange={handleChange}
  /> 
  <TextField
        id="date"
        label="Date"
        type="date"
        name="date_paid"
        defaultValue="yyyy-MM-dd"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /> 
  <TextField 
    id="standard-basic" 
    label="Paid To:"
    name="store" 
    value={formData.store}
    onChange={handleChange}
  /> 
  <TextField 
    id="standard-basic" 
    label="Description"
    name="description" 
    value={formData.description}
    onChange={handleChange}
  /> 
  {/* <InputLabel id="need-or-want-label">Need or Want?</InputLabel> */}
  <Select
      labelId="need-or-want-label"
      id="standard-basic"
      name="isNeeded"
      label="Need or Want?"
      value={formData.is_need}
      onChange={handleChange}
    >
      <MenuItem value="true">Needed</MenuItem>
      <MenuItem value="false">Wanted</MenuItem>
  </Select>
  {/* <InputLabel id="category-label">Category</InputLabel> */}
  <Select
      labelId="category-label"
      id="standard-basic"
      name="category"
      label="Category"
      value={formData.category}
      onChange={handleChange}
    >
      <MenuItem value="category">Categories here</MenuItem>
  </Select>



  </FormGroup>


    
  </div>

  )

}

export default PaymentSubmitForm;