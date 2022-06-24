import React, { useState} from "react";
import {TextField, Select, MenuItem ,makeStyles, Button, Checkbox, FormControl, FormHelperText, FormLabel, Container} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function PaymentSubmitForm({ stores, categories, onAddPayment }){
  const classes = useStyles();
  const [formData, setFormData] = useState({
      amount: "",
      date_paid: "",
      description: "",
      is_need: false,
      store_id: null,
      category_id: null,
  })
  

  const categoriesList = categories.map((category) => (
    <MenuItem key={category.id} value={category.id}>{category.category_type}</MenuItem>
  ))

  const storesList = stores.map((store) => (
    <MenuItem key={store.id} value={store.id}>{store.name}</MenuItem>
  ))


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
      onAddPayment(data)
    })
   }



  return (
  <div>
    <Container maxWidth="sm">
      <h2> Submit Your Payment! </h2>
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
    /> <span> </span>
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


    <FormLabel>Was this purchase a need?</FormLabel>
    <Checkbox 
          id="standard-basic"           
          name="is_need"
          value={true}
          label="Item needed?" 
          onChange={handleChange}
        />  <br />

    <FormControl className={classes.formControl}>
    <FormLabel component="legend">Store:</FormLabel>
    <Select
      displayEmpty
      className={classes.selectEmpty}
      name="store_id"
      value={formData.store_id}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="" disabled>
            Store/Company
      </MenuItem>
      {storesList}
      <FormHelperText>Store/Company</FormHelperText>
    </Select> 
    <br/>
    </FormControl>


    <FormControl className={classes.formControl}>
      <FormLabel component="legend">Category:</FormLabel>
        <Select
          displayEmpty
          id="standard-basic"
          className={classes.selectEmpty}
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          > 
          <MenuItem value="" disabled>
                Category
          </MenuItem>
          {categoriesList}
        </Select> 
      </FormControl> <br/>

      <TextField 
          className={classes.textField}
          id="standard-basic" 
          label="Description"
          name="description" 
          value={formData.description}
          onChange={handleChange}
          /> <span> </span>
    <Button variant="contained" color="primary" type="submit">
          Submit
      </Button>
    </form>
    </Container>
  </div>

  )

}

export default PaymentSubmitForm;