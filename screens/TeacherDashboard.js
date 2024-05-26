import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TeacherDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Teacher Dashboard</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ManageMarks')}
        >
          <View style={styles.buttonContent}>
            <Image source={require('./screens/images/marks.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Manage Marks</Text>
          </View>
        </TouchableOpacity>
        {/* Add more TouchableOpacity components for other buttons */}
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
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B6A8B',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TeacherDashboard;
