import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'get_blogPost':
      return action.payload;
    default:
      return state;
  }
};

const getBlog = dispatch => {
  return async () => {
    const response = await jsonserver.get('/blogPosts');
    dispatch({ type: 'get_blogPost', payload: response.data });
  };
};

const addBlog = dispatch => {
  return async (title, content, callback) => {
    await jsonserver.post('/blogPosts', { title, content });
    callback();
  };
};

const deleteBlog = dispatch => {
  return async id => {
    await jsonserver.delete(`/blogPosts/${id}`);
    dispatch({ type: 'delete_blogPost', payload: id });
  };
};

const editBlog = dispatch => {
  return async (id, title, content, callback) => {
    await jsonserver.put(`/blogPosts/${id}`, { title, content });
    dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deleteBlog, editBlog, getBlog },
  []
);
