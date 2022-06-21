import React from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import PaymentSubmitForm from './PaymentSubmitForm';
import SummaryHeader from './SummaryHeader';
import TopCatgories from './TopCategories';
import TopStores from './TopStores';

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

function Home({payments}){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <SummaryHeader/>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
            <TopStores />
        </Grid>
        <Grid item xs={6}>
          <PaymentSubmitForm payments={payments}/>
        </Grid>
        <Grid item xs>
          <TopCatgories/>
        </Grid>
      </Grid>
    </div>
  )


}

export default Home;