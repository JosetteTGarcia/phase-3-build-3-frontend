import React from "react";
import {TextField, Select, FormControl, MenuItem, InputLabel, Box} from '@material-ui/core';
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from "@material-ui/pickers";


function PaymentSubmitForm(){

  return (
  <div>
      <h1> Submit Your Payment! </h1>
  <form>
  <TextField id="standard-basic" label="Amount" /> <n/>
  <TextField id="standard-basic" label="Paid To:" /> <n/>
  <TextField id="standard-basic" label="Description"/> <n/>



  </form>


    
  </div>

  )

}

export default PaymentSubmitForm;