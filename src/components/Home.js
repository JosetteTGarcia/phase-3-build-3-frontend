import React from 'react'
import { makeStyles, Paper, Grid } from '@material-ui/core';
import PaymentSubmitForm from './PaymentSubmitForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>This is where stats will go</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Top Categories</Paper>
        </Grid>
        <Grid item xs={6}>
          <PaymentSubmitForm/>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Top Stores</Paper>
        </Grid>
      </Grid>
    </div>
  )


}

export default Home;