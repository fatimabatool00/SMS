// ViewSyllabus.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ViewSyllabus = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Syllabus</Text>
      <Image
        source={{ uri: '' }} // Replace with actual syllabus URL
        style={styles.syllabus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  syllabus: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
});

export default ViewSyllabus;
