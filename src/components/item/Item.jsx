import React, { useEffect } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Item = (props) => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);


    return (
        <div className='item' data-aos="fade-up">
            <Link to={`/blogPage/${props.id}`}>
                <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
            </Link>
            <h2 className='item-title'>{props.title}</h2>
            <p className='item-shortDescription'>{props.shortDescription}</p>
            <p className='item-description'>{props.description}</p>

            <Link to={`/blogPage/${props.id}`}>
                <button className='item-btn'>More</button>
            </Link>
        </div>
    )
}

export default Item
