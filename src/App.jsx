import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogPage from './pages/BlogPage';
import Footer from './components/footer/Footer';


function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        <Route path='/blogPage' element={<BlogPage />}>
          <Route path=':blogPageId' element={<BlogPage />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
