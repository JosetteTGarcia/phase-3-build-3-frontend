import React, {useState, useEffect, useCallback} from "react";
import {TextField, Button, Paper, Grid, makeStyles, Box} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));




function SummaryHeader({payments}){
  const classes = useStyles();
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [newFunds, setNewFunds] = useState("")
  const [paymentsTotal, setPaymentsTotal] = useState(0)
  const [savings, setSavings] = useState(0)
  const [needs, setNeeds] = useState(0)
  const [wants, setWants] = useState(0)
  const wantsPercentage = percIncrease(wants)
  const needsPercentage = percIncrease(needs)
  const savingsPercentage = percIncrease(savings)

  const calculateLeftoverIncome = useCallback( () => {
    if (monthlyIncome < 0){
      setSavings(0)
    } else {
      setSavings((monthlyIncome - paymentsTotal).toFixed(2))
    }
  }, [monthlyIncome, savings, paymentsTotal])



  useEffect(() => {
    //arrays for different purchases
    let neededPurchases = []
    let wantedPurchases = []
    let allPurchases = []


    //map payments and add them to array based need or want
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

    //calculates any leftover income after payments & sets savings 
    //(makes sure NaN or Infinity doesn't appear if we start with 0 somewhere)
    calculateLeftoverIncome()
    
    //set states pasted on arrays
    setPaymentsTotal(() => sumOfPayments(allPurchases))
    setNeeds(() => sumOfPayments(neededPurchases))
    setWants(() => sumOfPayments(wantedPurchases))
    },[payments, monthlyIncome, calculateLeftoverIncome])
    


//calculates totals of arrays created in useState
    function sumOfPayments(paymentArray){
      const sumOfPayments = paymentArray.reduce((previousAmount, a) =>  { return previousAmount + a}, 0)
      return sumOfPayments
    }


    // calculates percentages
    // if the state is below 0 - set it to 0 (prevents "savings" from going negative)
    // if  savings is below or equal to 0, only calculate based on total spent, not monthly monthlyIncome
    // else calculate percentages for all 3 based on monly income

    function percIncrease(a) {
      let percentage
      if(a < 0){
        percentage = 0
      } else if(savings <= 0) {
        percentage = (a/(needs + wants))*100
      } else {
        percentage = (a/monthlyIncome)*100
      }
    return percentage.toFixed(2)
  }

  
    

const handleNewFundsChange = e =>{
  setNewFunds(parseFloat(e.target.value))
}

  const handleSubmit = e => {
    e.preventDefault();
    setMonthlyIncome((monthlyIncome) => monthlyIncome + newFunds || 0)
  }

return (
<div>
<Grid container spacing={1}>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
      <h1 style={{ color: (wantsPercentage > 30) ? "red": "green" }}>
        {isNaN(wantsPercentage) ? 0: wantsPercentage}%
      </h1> 
      <h3>Wants</h3>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
      <h1 style={{ color: (savingsPercentage > 20) ? "green": "red" }}> 
      {isNaN(savingsPercentage) ? 0: savingsPercentage}% </h1> 
      <h3>Savings</h3>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
      <h1 style={{ color: (needsPercentage > 50) ? "red": "green" }}>
        {isNaN(needsPercentage) ? 0: needsPercentage}%
      </h1> 
      <h3>Needs</h3>
    </Paper>
  </Grid>
</Grid>


<Grid container spacing={1}>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
      <h4> Total Income This Month:</h4>
      <h4 >${monthlyIncome}</h4>
    </Paper>
  </Grid>
  <Grid item xs={4}>
    <Paper className={classes.paper}>
    <h4>Total Spent This Month:</h4>
    <h4>${paymentsTotal}</h4>
    </Paper>
  </Grid> 
  <Grid item xs={4}>
    <Paper className={classes.paper}>
      <h4>Unused Funds:</h4>
      <h4>${savings}</h4>
    </Paper>
  </Grid> 
</Grid>

<Grid container spacing={1}>
  <Grid item xs={6}>
    <Box className={classes.paper}>
      <h4>Add A Paycheck Here: </h4>
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" defaultValue="0" onChange={handleNewFundsChange}/> <br/>
      <Button type="submit" >Add Funds</Button>
    </form>
    </Box>
  </Grid>
  <Grid item xs={6}>
    <Box className={classes.paper}>
    <h4>Breakdown in Totals:</h4>
      Savings: ${savings} <br />
      Wants: ${wants} <br />
      Needs: ${needs} <br />
    </Box>
  </Grid> 
</Grid>

</div>

);
}


export default SummaryHeader;