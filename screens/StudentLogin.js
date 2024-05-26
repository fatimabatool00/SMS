import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const StudentLogin = ({ navigation }) => {
  const [registrationNo, setRegistrationNo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace the following with your actual login logic
    if (registrationNo === 'student' && password === 'password') {
      navigation.navigate('StudentDashboard');
    } else {
      Alert.alert('Login Failed', 'Invalid registration number or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Registration No"
        value={registrationNo}
        onChangeText={setRegistrationNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B6A8B',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StudentLogin;
