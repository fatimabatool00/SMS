import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const UploadTimetable = ({ navigation }) => {
  const [timetableImage, setTimetableImage] = useState(null);
  const [selectedClass, setSelectedClass] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const classes = ['Nursery', 'KG', 'Class-1', 'Class-2', 'Class-3', 'Class-4', 'Class-5', 'Class-6', 'Class-7', 'Class-8'];

  const handleChooseImage = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setTimetableImage(response.assets[0]);
      }
    });
  };

  const handleUpload = () => {
    // Implement your upload logic here, using selectedClass and timetableImage
    console.log('Class:', selectedClass);
    console.log('Timetable Image:', timetableImage);
  };

  const handleRemove = () => {
    setTimetableImage(null);
  };

  const handleClassSelect = (className) => {
    setSelectedClass(className);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload Timetable</Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setShowDropdown(true)}>
        <Text style={styles.dropdownButtonText}>{selectedClass || 'Select Class'}</Text>
      </TouchableOpacity>
      <Modal
        visible={showDropdown}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          {classes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleClassSelect(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={handleChooseImage}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>
      {timetableImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: timetableImage.uri }} style={styles.image} />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonText}>Upload Timetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRemove}>
          <Text style={styles.buttonText}>Remove Timetable</Text>
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
    backgroundColor: '#1B6A8B',
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 10,
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
  dropdownItem: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
  },
  dropdownItemText: {
    color: '#1B6A8B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: '45%',
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

export default UploadTimetable;
