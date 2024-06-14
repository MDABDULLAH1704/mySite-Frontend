import React, { useEffect, useContext } from 'react';
// import './CSS/BlogPage.css'
import { BlogContext } from '../context/BlogContext';
import { useParams } from 'react-router-dom';
import BlogDisplay from '../components/blogDisplay/BlogDisplay';
import RelatedBlogs from '../components/relatedBlogs/RelatedBlogs';


const BlogPage = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('MySite - BlogPage');
    }, []);


    const { all_blog } = useContext(BlogContext);
    const { blogPageId } = useParams();
    const blogPage = all_blog.find((e) => e.id === Number(blogPageId));


    return (
        <div>
            <BlogDisplay blogPage={blogPage} />
            <RelatedBlogs />
        </div>
    )
}

export default BlogPage
