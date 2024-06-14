import React, { useEffect } from 'react'
import './CSS/Blog.css'
import all_blog from '../components/assets/all_blog'
import Item from '../components/item/Item'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Blog = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('MySite - Blog');
    }, []);

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);


    return (
        <div>
            <h1 data-aos="fade-down">Blogs</h1>

            <div className='blogs' >
                {all_blog.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} title={item.title} shortDescription={item.shortDescription} />
                })}
            </div>
        </div>
    )
}

export default Blog
