import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Page from '../../ui/Page';
import Header from '../../components/Header';

const ShippingAddress = ({ navigation }) => {
  const [address, setAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleNext = () => {
    navigation.navigate('Payment', { shippingAddress: address });
  };

  return (
    <Page>
      <Header title="Shipping Address" />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={address.fullName}
          onChangeText={(text) => setAddress({...address, fullName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address.address}
          onChangeText={(text) => setAddress({...address, address: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={address.city}
          onChangeText={(text) => setAddress({...address, city: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          value={address.postalCode}
          onChangeText={(text) => setAddress({...address, postalCode: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={address.country}
          onChangeText={(text) => setAddress({...address, country: text})}
        />
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShippingAddress;