import React, { createContext } from "react";
import all_blog from "../components/assets/all_blog";
// import { useSearchParams } from "react-router-dom";

export const BlogContext = createContext(null);


const BlogContextProvider = (props) => {
    const contextValue = { all_blog };

    return (
        <BlogContext.Provider value={contextValue}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;
