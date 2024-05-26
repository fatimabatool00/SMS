import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

const ViewFeeStatus = ({ navigation }) => {
  const [selectedClass, setSelectedClass] = useState('Choose Class');
  const [modalVisible, setModalVisible] = useState(false);

  const classes = [
    'Nursery', 'Prep', 'Class 1', 'Class 2', 'Class 3',
    'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'
  ];

  const students = {
    'Nursery': [
      { name: 'John Doe', feeStatus: 'Paid' },
      { name: 'Jane Doe', feeStatus: 'Unpaid' }
    ],
    'Prep': [
      { name: 'Alice Smith', feeStatus: 'Paid' },
      { name: 'Bob Johnson', feeStatus: 'Unpaid' }
    ],
    'Class 1': [
      { name: 'Charlie Brown', feeStatus: 'Paid' },
      { name: 'David Wilson', feeStatus: 'Unpaid' }
    ],
    // Add more students for other classes
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectClass = (className) => {
    setSelectedClass(className);
    toggleModal();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>View Fee Status</Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
        <Text style={styles.dropdownButtonText}>{selectedClass}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {classes.map((className, index) => (
              <TouchableOpacity
                key={index}
                style={styles.classButton}
                onPress={() => selectClass(className)}
              >
                <Text style={styles.classButtonText}>{className}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      {selectedClass !== 'Choose Class' && (
        <View style={styles.feeContainer}>
          <Text style={styles.subHeader}>Class: {selectedClass}</Text>
          {students[selectedClass] && students[selectedClass].map((student, index) => (
            <View key={index} style={styles.studentContainer}>
              <Text>Student Name: {student.name}</Text>
              <Text>Fee Status: {student.feeStatus}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdownButton: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B6A8B',
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdownButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  classButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B6A8B',
    borderRadius: 5,
    marginBottom: 10,
  },
  classButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feeContainer: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  studentContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ViewFeeStatus;
