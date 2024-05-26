import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const StudentDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Dashboard</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewMarks')}
        >
          <View style={styles.buttonContent}>
            <Image source={require('./screens/images/marks.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>View Marks</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewFeeStatus')}
        >
          <View style={styles.buttonContent}>
            <Image source={require('./screens/images/fees.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>View Fee Status</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewTimetable')}
        >
          <View style={styles.buttonContent}>
            <Image source={require('./screens/images/timetable.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>View Timetable</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewSyllabus')}
        >
          <View style={styles.buttonContent}>
            <Image source={require('./screens/images/syllabus.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>View Syllabus</Text>
          </View>
        </TouchableOpacity>
        
      </View>
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
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B6A8B',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StudentDashboard;
