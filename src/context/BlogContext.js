import React, {useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children} = {}) =>{
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = (blogPost) => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
    }
    // const blogPosts = [{title: 'Blog post #1'}, {title: 'Blog post #2'}, {title: 'Blog post #3'}]

    return <BlogContext.Provider value={{data : blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;