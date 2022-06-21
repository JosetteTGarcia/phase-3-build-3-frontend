import React, {useEffect, useState} from "react";
import {TextField, Select, MenuItem ,makeStyles, Button, Checkbox} from '@material-ui/core';
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
  const [stores, setStores] = useState([])


  const classes = useStyles();
  const [formData, setFormData] = useState({
    payment: {
      amount: "",
      date_paid: "",
      description: "",
      is_need: false
    }
  })

const fetchCategories = () => {
  fetch('http://localhost:9292/categories')
  .then((resp) => resp.json())
  .then((data) => setCategories(data))
}

const fetchStores = () => {
  fetch('http://localhost:9292/stores')
  .then((resp) => resp.json())
  .then((data) => setStores(data))
}

  useEffect(() => {
    fetchCategories()
    fetchStores()
  },[])
  


  function handleChange(event) {
    if(event.target.name === "amount"){
      setFormData({
        ...formData,
          amount: parseFloat(event.target.value)
      }) 
    }
      else {
        setFormData({ 
          ...formData, 
          [event.target.name]: event.target.value 
        });
      }
  }
   
   function handleSubmit(e){
    e.preventDefault();
    console.log(formData)
    fetch("http://localhost:9292/payments", {
      method: 'POST',
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
  <form
   className={classes.formControl}
   onSubmit={handleSubmit}
  >
    <TextField 
      id="standard-basic" 
      label="Amount" 
      type="number"
      name="amount"
      value={formData.amount}
      onChange={handleChange}
    /> <br/>
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
        /> <br/>
    <TextField 
      id="standard-basic" 
      label="Description"
      name="description" 
      value={formData.description}
      onChange={handleChange}
    /> <br/>
    {/* <InputLabel id="need-or-want-label">Need or Want?</InputLabel> */}
    <Checkbox 
          id="is_needed"
          name="is_need"
          value={true}
          label="Item needed?" 
          onChange={handleChange}
        />  <br />
    <Select
        labelId="category-label"
        id="standard-basic"
        name="store_id"
        label="Store"
        value={formData.store_id}
        onChange={handleChange}
      >
    {stores.map((store) => (
        <MenuItem key={store.id} value={store.id}>{store.name}</MenuItem>

      ))} 
    </Select> <br/>
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
    </Select> <br/>
    <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
    </form>
    
  </div>

  )

}

export default PaymentSubmitForm;