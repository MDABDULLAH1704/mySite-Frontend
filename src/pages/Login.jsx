import React, { useState, useEffect } from 'react'
import './CSS/Login.css'
import { BASE_URL } from '../components/baseURL/baseURL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Login = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('MySite - Login');
    }, []);

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    // handleSubmit function 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/login`, { email, password })
            .then(result => {
                console.log(result)
                if (result.data == "Success") {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1 data-aos="fade-down">Login</h1>

            <form onSubmit={handleSubmit} className='login-form'>
                <div data-aos="fade-right">
                    <input type="email" placeholder='Enter email' name='email' autoComplete='off' className='login-input' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div data-aos="fade-left">
                    <input type="password" placeholder='Enter password' name='password' autoComplete='off' className='login-input' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit' className='login-btn' ><b>Login</b></button>
            </form>
        </div>
    )
}

export default Login
