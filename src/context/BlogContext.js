import React, {useReducer} from 'react';

const BlogContext = React.createContext();
// state can be anything like blogPost or any value but by convention we usually name it state
const blogReducer = (state,action) => {
    switch(action.type) {
        case 'add_blogPost':
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        default:
            return state;    
    }
}

export const BlogProvider = ({children} = {}) =>{
    const [blogPosts, dispatch] = useReducer(blogReducer,[]);
    
    const addBlogPost = () => {
        dispatch({type: 'add_blogPost'})
    }
    return <BlogContext.Provider value={{data : blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
}


export default BlogContext;



    // const addBlogPost = (blogPost) => {
    //     setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
    // }
    // const blogPosts = [{title: 'Blog post #1'}, {title: 'Blog post #2'}, {title: 'Blog post #3'}]