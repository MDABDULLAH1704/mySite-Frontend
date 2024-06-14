import React, { useEffect } from 'react'
import './BlogDisplay.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const BlogDisplay = (props) => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    const { blogPage } = props;


    return (
        <>
            <h1 className='blogDisplay-title' data-aos="fade-down">{blogPage.title}</h1>

            <div className='blogDisplay'>
                <div className="blogDisplay-left" data-aos="fade-up">
                    <img src={blogPage.image} alt="" />
                </div>

                <div className="blogDisplay-right" >
                    <p>{blogPage.description}</p>
                </div>
            </div>
        </>
    )
}

export default BlogDisplay
