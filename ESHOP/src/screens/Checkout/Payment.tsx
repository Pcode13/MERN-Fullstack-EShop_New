import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Page from '../../ui/Page';
import Header from '../../components/Header';

const Payment = ({ navigation, route }) => {
  const { shippingAddress } = route.params;
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [payment, setPayment] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' },
    { id: 'apple', name: 'Apple Pay', icon: '🍎' },
    { id: 'google', name: 'Google Pay', icon: '🔵' },
  ];

  const handleNext = () => {
    navigation.navigate('Confirmation', { 
      shippingAddress, 
      paymentInfo: { ...payment, method: selectedMethod }
    });
  };

  return (
    <Page>
      <Header title="Payment" />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        {paymentMethods.map(method => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.methodOption,
              selectedMethod === method.id && styles.selectedMethod
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <Text style={styles.methodIcon}>{method.icon}</Text>
            <Text style={styles.methodName}>{method.name}</Text>
            <View style={[
              styles.radio,
              selectedMethod === method.id && styles.radioSelected
            ]} />
          </TouchableOpacity>
        ))}

        {selectedMethod === 'card' && (
          <View style={styles.cardForm}>
            <Text style={styles.sectionTitle}>Card Information</Text>
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              value={payment.cardNumber}
              onChangeText={(text) => setPayment({...payment, cardNumber: text})}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Cardholder Name"
              value={payment.cardName}
              onChangeText={(text) => setPayment({...payment, cardName: text})}
            />
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="MM/YY"
                value={payment.expiryDate}
                onChangeText={(text) => setPayment({...payment, expiryDate: text})}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="CVV"
                value={payment.cvv}
                onChangeText={(text) => setPayment({...payment, cvv: text})}
                keyboardType="numeric"
              />
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Review Order</Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  methodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedMethod: {
    borderColor: '#000',
    backgroundColor: '#f8f8f8',
  },
  methodIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  methodName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  radioSelected: {
    borderColor: '#000',
    backgroundColor: '#000',
  },
  cardForm: {
    marginTop: 20,
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

export default Payment;