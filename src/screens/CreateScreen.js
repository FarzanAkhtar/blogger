import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../contexts/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlog(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 10,
    marginBottom: 5
  },
  label: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold'
  }
});

export default CreateScreen;
