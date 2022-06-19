import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IncomeBreakdown from "./IncomeBreakdown";


function SummaryHeader(){
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [newFunds, setNewFunds] = useState(0)

const handleNewFundsChange = e =>{
  setNewFunds(parseFloat(e.target.value))
}

  const handleSubmit = e => {
    e.preventDefault();
    setMonthlyIncome((monthlyIncome) => monthlyIncome + newFunds || 0)
    console.log(monthlyIncome)
  }

return (
<div>
{monthlyIncome}
  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
    <label> Got paid? Add amount here:</label>
      <TextField id="standard-basic" label="$$$" defaultValue="0" onChange={handleNewFundsChange}/>
      <Button type="submit" variant="contained">Add Funds</Button>
    </form>

  <div>
    <IncomeBreakdown leftoverIncome={monthlyIncome}/>
  </div>
</div>

);
}


export default SummaryHeader;