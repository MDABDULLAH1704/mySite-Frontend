import React from 'react'
import './RelatedBlogs.css'
import all_blog from '../assets/all_blog'
import Item from '../item/Item'


const RelatedBlogs = () => {
    return (
        <>
            <h1 className='relatedBlogs-title'>Explore More Blogs</h1>

            <div className='relatedBlogs'>
                {all_blog.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} title={item.title} shortDescription={item.shortDescription} />
                })}
            </div>
        </>
    )
}

export default RelatedBlogs
