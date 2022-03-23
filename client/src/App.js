import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BloodGroup from './Blood/BloodGroup';
import User from './Users/User';
import Donation from './Donations/Donation';
import CreateView from './post/CreateView';
import { Footer } from './Footer';
import Request from './Request/Requests';

function App() {

  return (
  <>
          <BrowserRouter>
            <Navbar/>
            
            <Box>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/Lookingforblood" element={<BloodGroup/>}/>
                <Route exact path="/Donations" element={<Donation/>}/>
                <Route exact path="/BloodRequests" element={<Request/>}/>
                <Route exact path="/User" element={<User/>}/>
                <Route exact path="/create" element={<CreateView/>}/>
              </Routes>
            </Box>
            <Footer/>
          </BrowserRouter>
          
          
      </>
  );
}

export default App;
