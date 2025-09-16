import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../hooks/reduxHooks';
import Page from '../../ui/Page';
import Header from '../../components/Header';

const AdminContainer = () => {
  const navigation = useNavigation();
  const { user, isAuthenticated } = useAppSelector(state => state.auth);

  if (!isAuthenticated || !user?.isAdmin) {
    return (
      <Page>
        <Header title="Admin" />
        <View style={styles.container}>
          <Text style={styles.text}>Access Denied</Text>
          <Text style={styles.subText}>Admin privileges required</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login as Admin</Text>
          </TouchableOpacity>
        </View>
      </Page>
    );
  }

  return (
    <Page>
      <Header title="Admin Panel" />
      <View style={styles.adminContainer}>
        <Text style={styles.welcomeText}>Welcome, {user.name}</Text>

        <View style={styles.adminOptions}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Manage Products</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Manage Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Manage Users</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Analytics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  adminContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  adminOptions: {
    flex: 1,
  },
  optionButton: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdminContainer;
