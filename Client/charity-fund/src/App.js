import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Home/Homepage'
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import BlogPage from './pages/Blog/BlogPage';
import ReportsPage from './pages/Reports/ReportsPage';
import ContactsPage from './pages/Contacts/ContactsPage';

import LoginPage from './pages/Login/LoginPage';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BlogCardPage } from './pages/Blog/Components/BlogCardPage';
import SingleProjectPage from './pages/Projects/SingleProjectPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn')=== 'true');
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [isAdmin, setIsAdmin ] = useState(localStorage.getItem('userName') === "Okarmazina@ukr.net");
  
  return (

    <Router>
      <div>
        <Header 
        userName={userName} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
        setIsAdmin={setIsAdmin}/>
         
            <Routes>
              <Route exact path='/' element={<Homepage/>} />
              <Route  path='/about' element={<AboutPage/>} />

              <Route  path='/projects/:projectId' element={<SingleProjectPage/>} />
              <Route  path='/projects' element={<ProjectsPage/>} />
              <Route  path='/blog/:postId' element={<BlogCardPage isAdmin={isAdmin}/>} />

              <Route  path='/blog' element={<BlogPage isAdmin={isAdmin}/>} />
              <Route  path='/reports' element={<ReportsPage/>} />
              <Route  path='/contacts' element={<ContactsPage/>} />

              <Route  path='/login' element={<LoginPage/>}
              render={(props)=>
              <LoginPage {...props} 
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}/>}
              setIsAdmin={setIsAdmin}/>
              
            </Routes>
            <Footer year={new Date().getFullYear()}/>
      </div>
    </Router>  
  );
}

export default App;
