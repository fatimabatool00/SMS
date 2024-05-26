// ViewTimetable.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ViewTimetable = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Timetable</Text>
      <Image
        source={{ uri: 'https://example.com/timetable.png' }} // Replace with actual timetable URL
        style={styles.timetable}
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
  timetable: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
});

export default ViewTimetable;
