import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../contexts/BlogContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlog } = useContext(Context);
  const blog = state.find(blogPost => blogPost.id === id);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlog(id, title, content, () => navigation.pop());
      }}
      init={{ title: blog.title, content: blog.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
