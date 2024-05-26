import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

const ViewMarks = ({ navigation }) => {
  const [selectedClass, setSelectedClass] = useState('Class 6'); // default current class
  const [modalVisible, setModalVisible] = useState(false);

  const classes = [
    'Nursery', 'Prep', 'Class 1', 'Class 2', 'Class 3',
    'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'
  ];

  const subjects = {
    nursery: ['English', 'Urdu', 'Math', 'Nazra-e-Quran'],
    prep: ['English', 'Urdu', 'Math', 'Nazra-e-Quran', 'General Knowledge'],
    class1: ['English', 'Urdu', 'Math', 'General Knowledge', 'Islamyat'],
    class2_3: ['English', 'Urdu', 'Math', 'General Knowledge', 'Islamyat', 'Computer Part 1', 'Computer Part 2'],
    class4_5: ['English', 'Urdu', 'Math', 'General Knowledge', 'Social Study', 'Islamyat', 'Computer Part 1', 'Computer Part 2'],
    class6_7_8: ['English', 'Urdu', 'Math', 'General Knowledge', 'Social Study', 'Islamyat', 'Computer Part 1', 'Computer Part 2', 'Quran']
  };

  const marksDistribution = {
    firstTerm: {
      general: 50,
      computerPart1: 35,
      computerPart2: 15
    },
    midTerm: {
      general: 50,
      computerPart1: 35,
      computerPart2: 15
    },
    finalTerm: {
      general: 100,
      computerPart1: 70,
      computerPart2: 30
    }
  };

  const sampleMarks = {
    firstTerm: {
      'Class 6': {
        English: 45,
        Urdu: 40,
        Math: 42,
        'General Knowledge': 48,
        Islamyat: 46,
        'Computer Part 1': 30,
        'Computer Part 2': 12,
        'Social Study': 45,
        Quran: 47
      },
      // Add more class marks if needed
    },
    midTerm: {
      'Class 6': {
        English: 46,
        Urdu: 41,
        Math: 43,
        'General Knowledge': 49,
        Islamyat: 47,
        'Computer Part 1': 32,
        'Computer Part 2': 13,
        'Social Study': 46,
        Quran: 48
      },
      // Add more class marks if needed
    },
    finalTerm: {
      'Class 6': {
        English: 90,
        Urdu: 85,
        Math: 88,
        'General Knowledge': 95,
        Islamyat: 89,
        'Computer Part 1': 60,
        'Computer Part 2': 25,
        'Social Study': 87,
        Quran: 90
      },
      // Add more class marks if needed
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectClass = (className) => {
    setSelectedClass(className);
    toggleModal();
  };

  const renderMarks = (term, className) => {
    const marks = sampleMarks[term][className];
    return Object.keys(marks).map(subject => {
      const maxMarks = subject === 'Computer Part 1' ? marksDistribution[term].computerPart1 :
                       subject === 'Computer Part 2' ? marksDistribution[term].computerPart2 :
                       marksDistribution[term].general;
      return (
        <Text key={subject}>{subject}: {marks[subject]}/{maxMarks}</Text>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>View Marks</Text>
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
      <View style={styles.markContainer}>
        <Text style={styles.markHeader}>First Term</Text>
        {renderMarks('firstTerm', selectedClass)}
      </View>
      <View style={styles.markContainer}>
        <Text style={styles.markHeader}>Mid Term</Text>
        {renderMarks('midTerm', selectedClass)}
      </View>
      <View style={styles.markContainer}>
        <Text style={styles.markHeader}>Final Term</Text>
        {renderMarks('finalTerm', selectedClass)}
      </View>
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
  markContainer: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  markHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ViewMarks;
