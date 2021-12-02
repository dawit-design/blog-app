import createDataContext from "./createDataContext";

// state can be anything like blogPost or any value but by convention we usually name it state
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: "add_blogPost" });
    }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
