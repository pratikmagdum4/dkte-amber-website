import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login/LoginForm.jsx';
import StudentSubmissionForm from './pages/Home/Home.jsx';
// import Testing1 from './pages/test.jsx';
import LoginForm2 from './pages/login/login2.jsx';



const App = () => {



  return (
      <Router>
        <Routes>
        <Route path='/' element={<StudentSubmissionForm />}>
          </Route>
        <Route path='/login' element={<LoginForm2 />}>
          </Route>
        </Routes>
      </Router>
  )
  
}

export default App