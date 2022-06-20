import React, {useEffect, useState} from "react";
import {TextField, Select, MenuItem ,makeStyles, FormGroup} from '@material-ui/core';
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



function PaymentSubmitForm({payments}){
  const [categories, setCategories] = useState([])


  const classes = useStyles();
  const [formData, setFormData] = useState({
    amount: "",
    date_paid: "",
    description: "",
    is_need: "",
  })

  useEffect(() => {
    fetch('http://localhost:9292/categories')
    .then((resp) => resp.json())
    .then((data) => setCategories(data))
  },[])
  
  // const categoryItems = categories.map((category) => (
  //     <MenuItem key={category.id} value={formData.category_id}>{category.category_type}</MenuItem>

  //   ));


  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log({[event.target.name]: event.target.value })
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
  <FormGroup
   className={classes.formControl}
   onSubmit={handleSubmit}
  >
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
        value={formData.date_paid}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
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
  {/* <Select
      labelId="category-label"
      id="standard-basic"
      name="store"
      label="Store"
      value={formData.store_id}
      onChange={handleChange}
    >
   {storeItems}
  </Select> */}
  <Select
      labelId="category-label"
      id="standard-basic"
      name="category_id"
      label="Category"
      value={formData.category_id}
      onChange={handleChange}
    >
   {categories.map((category) => (
      <MenuItem key={category.id} value={category.id}>{category.category_type}</MenuItem>

    ))}
  </Select>


  <input type="submit" value="Submit" />

  </FormGroup>


    
  </div>

  )

}

export default PaymentSubmitForm;