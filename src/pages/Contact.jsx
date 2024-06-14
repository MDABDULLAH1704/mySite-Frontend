import React, { useState, useEffect } from 'react';
import './CSS/Contact.css';
import submit_success_img from './assets/submit_success_img.png'
import { BASE_URL } from '../components/baseURL/baseURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('MySite - Contact');
    }, []);

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/contact`, { name, email, message })
            .then(result => {
                console.log(result)
                setShowSuccess(true)
                // navigate('/')
                setTimeout(() => {
                    //     setShowSuccess(false)
                    navigate('/')
                }, 1000);
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <h1 data-aos="fade-down">Contact Us</h1>

            {showSuccess ? (
                <div className="success-message">
                    <img src={submit_success_img} alt="Submit Successfully" />
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='contact-form'>
                    <div data-aos="fade-right">
                        <input type="text" placeholder='Enter your name' name='name' autoComplete='off' className='contact-form-input' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div data-aos="fade-left">
                        <input type="email" placeholder='Enter your email' name='email' autoComplete='off' className='contact-form-input' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div data-aos="fade-right">
                        <textarea type="text" placeholder='Enter your message' name='message' autoComplete='off' className='contact-form-input textarea' onChange={(e) => setMessage(e.target.value)} />
                    </div>

                    <button type='submit' className='contact-btn'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default Contact
