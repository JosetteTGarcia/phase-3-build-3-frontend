import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllPayments from './components/AllPayments'
import Home from './components/Home'
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allpayments" element={<AllPayments/>} />
        </Routes>
    </Router>
  );
}

export default App;
