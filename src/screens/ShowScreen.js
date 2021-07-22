import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../contexts/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blog = state.find(blogPost => blogPost.id === navigation.getParam('id'));
  return (
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
        >
          <Feather name="edit" size={24} color="black" />
        </TouchableOpacity>
      );
    }
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
