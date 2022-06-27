import React, {useEffect, useState}from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import PaymentSubmitForm from './PaymentSubmitForm';
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



function Home({onAddPayment, payments}){
  const classes = useStyles();
  const [categories, setCategories] = useState([])
  const [stores, setStores] = useState([])

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


    const addStores = (store) => {
      setStores([...stores, store])
    }

    const addCategory = newCategory => {
      setCategories([...categories, newCategory])
      console.log(categories)
    }


    
  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
            <TopStores
            onAddStore={addStores}
            />
        </Grid>
        <Grid item xs={6}>
          <PaymentSubmitForm 
            onAddPayment={onAddPayment}
            stores={stores} 
            categories={categories}
            />
        </Grid>
        <Grid item xs>
          <TopCatgories
          onAddCategory={addCategory}
          />
        </Grid>
      </Grid>
    </div>
  )


}

export default Home;