import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BloodGroup from './Blood/BloodGroup';
import User from './Users/User';
import Donation from './Donations/Donation';
import CreateView from './post/CreateView';
import { Footer } from './Footer';
import Request from './Request/Requests';
import UpdateView from './post/UpdateView';
import Login from './Login/login';
import Signup from './SignUp/signup';

function App() {
  const user = localStorage.getItem("token")
  return (
  <>
          <BrowserRouter>
            <Navbar/>
            
            <Box>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Signup" element={<Signup/>}/>
                {user && <Route exact path="/Lookingforblood" element={<BloodGroup/>}/>}
                {user && <Route exact path="/Donations" element={<Donation/>}/>}
                {user && <Route exact path="/BloodRequests" element={<Request/>}/>}
                {user && <Route exact path="/User" element={<User/>}/>}
                {user && <Route exact path="/create" element={<CreateView/>}/>}
                {user && <Route exact path="/update/:id" element={<UpdateView/>}/>}
                <Route exact path="/Lookingforblood" element={<Navigate replace to = "/Login" />} />
                <Route exact path="/User" element={<Navigate replace to = "/Login" />} />
                <Route exact path="/BloodRequests" element={<Navigate replace to = "/Login" />} />
                <Route exact path="/Donations" element={<Navigate replace to = "/Login" />} />
                <Route exact path="/create" element={<Navigate replace to = "/Login" />} />
                {/* <Route exact path="/" element={<Navigate replace to = "/Login" />} /> */}
              </Routes>
            </Box>
            <Footer/>
          </BrowserRouter>
          
          
      </>
  );
}

export default App;
