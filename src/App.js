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
  
  return (
    <Router>
      <NavBar/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allpayments" element={<AllPayments payments={payments}/>} />
        </Routes>
    </Router>
  );
}

export default App;
