import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../redux/cartSlice';
import Page from '../../ui/Page';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { RootStackParamList } from '../../navigation/types/navgationType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Checkout'
>;

const CartContainer = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { items, total, totalItems } = useSelector(
    (state: RootState) => state.cart,
  );
  const dispatch = useDispatch();

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
        source={{
          uri:
            item.image ||
            'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
        }}
        style={styles.itemImage}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleDecrement(item._id)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleIncrement(item._id)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemove(item._id)}
      >
        <Text style={styles.removeText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Page>
      <Header title="Cart" />
      {items.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            renderItem={renderCartItem}
            keyExtractor={item => item._id.toString()}
            style={styles.list}
          />
          <View style={styles.footer}>
            <View>
              <Text style={styles.totalItems}>Items: {totalItems}</Text>
              <Text style={styles.totalPrice}>Total: ${total.toFixed(2)}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <CustomButton
                title="Proceed to Checkout"
                onPress={() => navigation.navigate('Checkout')}
              />
            </View>
          </View>
        </>
      )}
    </Page>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#e63946',
    marginTop: 4,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: '600',
  },
  removeButton: {
    marginLeft: 15,
    padding: 5,
  },
  removeText: {
    fontSize: 20,
    color: '#e63946',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalItems: {
    fontSize: 16,
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
});

export default CartContainer;
