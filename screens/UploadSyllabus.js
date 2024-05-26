import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const UploadSyllabus = ({ navigation }) => {
  const [syllabusImage, setSyllabusImage] = useState(null);
  const [selectedClass, setSelectedClass] = useState('Choose Class');
  const [modalVisible, setModalVisible] = useState(false);

  const classes = ['Nursery', 'KG', 'Class-1', 'Class-2', 'Class-3', 'Class-4', 'Class-5', 'Class-6', 'Class-7', 'Class-8'];

  const handleChooseImage = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setSyllabusImage(response.assets[0]);
      }
    });
  };

  const handleUpload = () => {
    // Implement your upload logic here, using selectedClass and syllabusImage
    console.log('Class Name:', selectedClass);
    console.log('Syllabus Image:', syllabusImage);
  };

  const handleRemove = () => {
    setSyllabusImage(null);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectClass = (className) => {
    setSelectedClass(className);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload Syllabus</Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
        <Text style={styles.dropdownButtonText}>{selectedClass || 'Select Class'}</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleChooseImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>
      {syllabusImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: syllabusImage.uri }} style={styles.image} />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonText}>Upload Syllabus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRemove}>
          <Text style={styles.buttonText}>Remove Syllabus</Text>
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
    marginBottom: 20,
  },
  dropdownButton: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    borderBlockColor: '#1B6A8B',
  },
  dropdownButtonText: {
    color: '#1B6A8B',
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
  button: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B6A8B',
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  
});

export default UploadSyllabus;
