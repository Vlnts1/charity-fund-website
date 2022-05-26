import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from '../../pages/Home/Homepage'
import AboutPage from '../../pages/About/AboutPage';
import ProjectsPage from '../../pages/Projects/ProjectsPage';
import BlogPage from '../../pages/Blog/BlogPage';
import ReportsPage from '../../pages/Reports/ReportsPage';
import ContactsPage from '../../pages/Contacts/ContactsPage';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SingleProjectPage from '../../pages/Projects/SingleProjectPage';

function Navigation () {
    return (

        <Router>
            <Header/>
              <Routes>
                <Route exact path='/' element={<Homepage/>} />
                <Route  path='/about' element={<AboutPage/>} />
  
                <Route  path='/project/:id' element={<SingleProjectPage/>} />
                <Route  path='/projects' element={<ProjectsPage/>} />
  
                <Route  path='/blog' element={<BlogPage/>} />
                <Route  path='/reports' element={<ReportsPage/>} />
                <Route  path='/contacts' element={<ContactsPage/>} />
                
              </Routes>
            <Footer year={new Date().getFullYear()}/>
        </Router>  

    )

}

export default Navigation