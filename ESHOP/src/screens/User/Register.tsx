// src/screens/Auth/Register.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    console.log('Registering with:', { name, email, password });
    // TODO: call API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <CustomTextInput
        label="Name"
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomTextInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* <Button title="Register" onPress={onRegister} /> */}

      <CustomButton title="Register" onPress={onRegister} />
      <CustomButton title="Login" onPress={onRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Register;
