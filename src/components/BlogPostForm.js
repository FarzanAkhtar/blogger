import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, init }) => {
  const [title, setTitle] = useState(init.title);
  const [content, setContent] = useState(init.content);
  return (
    <View>
      <Text style={styles.label}>Enter blog title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  init: {
    title: '',
    content: ''
  }
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

export default BlogPostForm;
