import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Homepage from './pages/Home/Homepage'
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import BlogPage from './pages/Blog/BlogPage';
import ReportsPage from './pages/Reports/ReportsPage';
import ContactsPage from './pages/Contacts/ContactsPage';

import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Login/SignupPage';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn')=== 'true')
  const [userName, setUserName] = useState(localStorage.getItem('userName'))
  
  return (

    <Router>
      <div>
        <Header userName={userName} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <Menu/>

            <Routes>
              <Route exact path='/' element={<Homepage/>} />
              <Route  path='/about' element={<AboutPage/>} />
              <Route  path='/projects' element={<ProjectsPage/>} />
              <Route  path='/blog' element={<BlogPage/>} />
              <Route  path='/reports' element={<ReportsPage/>} />
              <Route  path='/contacts' element={<ContactsPage/>} />
              
              <Route  path='/login' element={<LoginPage/>} render={(props)=>
              <LoginPage {...props} 
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}/>}/>
              <Route  path='/signup' element={<SignupPage/>} />
            </Routes>
            <Footer year={new Date().getFullYear()}/>
      </div>
    </Router>  
  );
}

export default App;
