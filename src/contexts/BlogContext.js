import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlog = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogPost', payload: { title, content } });
    callback();
  };
};

const deleteBlog = dispatch => {
  return id => dispatch({ type: 'delete_blogPost', payload: id });
};

const editBlog = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deleteBlog, editBlog },
  [{ id: 1, title: 'Test Post', content: 'This is a test blogPost!' }]
);
