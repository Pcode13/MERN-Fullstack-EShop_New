import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useAppSelector } from '../../hooks/reduxHooks';
import Page from '../../ui/Page';
import Header from '../../components/Header';

const Confirmation = ({ navigation, route }) => {
  const { shippingAddress, paymentInfo } = route.params;
  const { items, total } = useAppSelector(state => state.cart);

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    alert('Order placed successfully!');
    navigation.navigate('Home');
  };

  return (
    <Page>
      <Header title="Order Confirmation" />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <Text>{shippingAddress.fullName}</Text>
          <Text>{shippingAddress.address}</Text>
          <Text>{shippingAddress.city}, {shippingAddress.postalCode}</Text>
          <Text>{shippingAddress.country}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <Text>**** **** **** {paymentInfo.cardNumber.slice(-4)}</Text>
          <Text>{paymentInfo.cardName}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          {items.map(item => (
            <View key={item._id} style={styles.orderItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Qty: {item.quantity}</Text>
              <Text>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          ))}
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemName: {
    flex: 1,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#4CAF50',
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

export default Confirmation;