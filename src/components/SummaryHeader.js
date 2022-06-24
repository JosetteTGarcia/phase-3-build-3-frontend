import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IncomeBreakdown from "./IncomeBreakdown";


function SummaryHeader({payments}){
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [newFunds, setNewFunds] = useState(0)
  const [paymentsTotal, setPaymentsTotal] = useState([])
  const [savings, setSavings] = useState(0)
  const [needs, setNeeds] = useState(0)
  const [wants, setWants] = useState(0)



// function settingPaymentsTotal(){
//   const sumOfPayments = payments.map((payment) => (payment.amount))
//   .reduce((previousAmount, a) =>  { return previousAmount + a}, 0)
//   setPaymentsTotal(sumOfPayments)
// }

  useEffect(() => {
    let neededPurchases = []
    let wantedPurchases = []
    let allPurchases = []
      payments.map((payment) => {
      if (payment.is_need){
        neededPurchases = [...neededPurchases, payment.amount]
      }
      else{
        wantedPurchases = [...wantedPurchases, payment.amount]
      }
      allPurchases = neededPurchases.concat(wantedPurchases)
      return (neededPurchases , wantedPurchases, allPurchases)
    })
    // console.log(sumOfPayments(neededPurchases))
    // console.log(sumOfPayments(wantedPurchases))
    setSavings(monthlyIncome)
    setPaymentsTotal(() => sumOfPayments(allPurchases))
    })
    
    function sumOfPayments(paymentArray){
      const sumOfPayments = paymentArray.reduce((previousAmount, a) =>  { return previousAmount + a}, 0)
      return sumOfPayments.toFixed(2)
    }
    
  //   payment.amount)
  //   .reduce((previousAmount, a) =>  { return previousAmount + a}, 0)
  //   setPaymentsTotal(sumOfPayments)
  // },[payments])


const handleNewFundsChange = e =>{
  setNewFunds(parseFloat(e.target.value))
}

  const handleSubmit = e => {
    e.preventDefault();
    setMonthlyIncome((monthlyIncome) => monthlyIncome + newFunds || 0)
  }

return (
<div>
  <h1> ${monthlyIncome} </h1>
  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
    <label> Got paid? Add amount here:</label>
      <TextField id="standard-basic" label="$$$" defaultValue="0" onChange={handleNewFundsChange}/>
      <Button type="submit" variant="contained">Add Funds</Button>
    </form>

<h1> ${paymentsTotal}</h1>
  <div>
    <IncomeBreakdown savings={savings} needs={needs} wants={wants} />
  </div>
</div>

);
}


export default SummaryHeader;