import React, { useState, useEffect } from 'react'
import './CSS/Signup.css'
import { BASE_URL } from '../components/baseURL/baseURL'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Signup = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('MySite - SignUp');
    }, []);

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    // handleSubmit function 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/signup`, { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1 data-aos="fade-down">Sign Up</h1>

            <form onSubmit={handleSubmit} className='signup-form'>
                <div data-aos="fade-right">
                    <input type="text" placeholder='Enter name' name='name' autoComplete='off' className='signup-form-input' onChange={(e) => setName(e.target.value)} />
                </div>
                <div data-aos="fade-left">
                    <input type="email" placeholder='Enter email' name='email' autoComplete='off' className='signup-form-input' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div data-aos="fade-right">
                    <input type="password" placeholder='Enter password' name='password' autoComplete='off' className='signup-form-input' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit' className='signup-btn' >SignUp</button>
            </form>

            <p className='signup-p' data-aos="fade-right"><b>Already Have An Account</b></p>
            <p className='signup-p'><Link to='/login' className='signup-p-link'><b className='signup-p-b'>Login</b></Link></p>
        </div>
    )
}

export default Signup
