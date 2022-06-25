import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import './App.css';
import AllPayments from './components/AllPayments'
import Home from './components/Home'
import NavBar from './components/NavBar';



function App() {
  const [payments, setPayments] = useState([])



  useEffect(() => {
    fetch('http://localhost:9292/payments')
    .then((resp) => resp.json())
    .then((data) => setPayments(data))
  },[])
  
  const deletePayment = payment => {
    setPayments(payments.filter(p => p.id !== payment.id))
  }

  const addPayment = newPayment => {
    setPayments([...payments, newPayment])
    console.log(payments)
  }

  function handleEditPayment(updatedPayment) {
    console.log("hello")
    const updatedPayments = payments.map((payment) =>
      payment.id === updatedPayment.id ? updatedPayment : payment
    );
    setPayments(updatedPayments);
  }
  return (
    <Router>
      <NavBar/>
      <Routes>
            <Route path="/" element={<Home payments={payments}  onAddPayment={addPayment} />} />
            <Route path="/allpayments" element={<AllPayments 
            payments={payments} 
            deletePayment={deletePayment}
            onSuccessfulEdit={handleEditPayment}
            />} />
        </Routes>
    </Router>
  );
}

export default App;
