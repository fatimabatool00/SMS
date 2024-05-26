// ManageFees.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ManageFees = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Fees</Text>
      <TextInput style={styles.input} placeholder="Registration Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Student Name" />
      <TextInput style={styles.input} placeholder="Amount Due" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Amount Paid" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Payable Amount" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Payment Date" />
      <TextInput style={styles.input} placeholder="Late Fees (Yes/No)" />
      <TextInput style={styles.input} placeholder="Remarks" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Fee Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Fee Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Fee Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete Fee Record</Text>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    width: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B6A8B',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ManageFees;
