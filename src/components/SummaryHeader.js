import React, {useState, useEffect} from "react";
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
  const [newFunds, setNewFunds] = useState(0)
  const [paymentsTotal, setPaymentsTotal] = useState(0)
  const [savings, setSavings] = useState(0)
  const [needs, setNeeds] = useState(0)
  const [wants, setWants] = useState(0)
  const leftoverIncome = (monthlyIncome - paymentsTotal).toFixed(2)

  useEffect(() => {
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
    // console.log(sumOfPayments(neededPurchases))
    // console.log(sumOfPayments(wantedPurchases))
    setPaymentsTotal(() => sumOfPayments(allPurchases))
    setNeeds(() => sumOfPayments(neededPurchases))
    setWants(() => sumOfPayments(wantedPurchases))
    setSavings(leftoverIncome)
    },[payments, leftoverIncome])
    



    function sumOfPayments(paymentArray){
      const sumOfPayments = paymentArray.reduce((previousAmount, a) =>  { return previousAmount + a}, 0)
      return sumOfPayments.toFixed(2)
    }


    function percIncrease(a, monthlyIncome) {
      if(monthlyIncome !== 0) {
        return (a/monthlyIncome)*100
      } else {
        setMonthlyIncome(0)
      }
          
  }

  const wantsPercentage = (wants/monthlyIncome)*100
   

  const needsPercentage = (needs/monthlyIncome)*100
   
  const savingsPercentage = (savings/monthlyIncome)*100
   


  
    

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
      <h4 >${monthlyIncome.toFixed(2)}</h4>
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
      <h4>${leftoverIncome}</h4>
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