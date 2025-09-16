import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { logout } from '../../redux/authSlice';
import { clearSecureToken } from '../../utils/secureStorage';
import Page from '../../ui/Page';
import Header from '../../components/Header';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector(state => state.auth);

  const handleLogout = async () => {
    await clearSecureToken();
    dispatch(logout());
    Alert.alert('Success', 'Logged out successfully');
  };

  if (!isAuthenticated) {
    return (
      <Page>
        <Header title="Profile" />
        <View style={styles.container}>
          <Text style={styles.text}>Please login to view profile</Text>
          <Text style={styles.text}></Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </Page>
    );
  }

  return (
    <Page>
      <Header title="Profile" />
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
          {user?.isAdmin && <Text style={styles.adminBadge}>Admin User</Text>}
        </View>

        {user?.isAdmin && (
          <TouchableOpacity
            style={styles.adminButton}
            onPress={() => navigation.navigate('Admin')}
          >
            <Text style={styles.buttonText}>Admin Panel</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  userInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  adminBadge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  adminButton: {
    backgroundColor: '#FF9500',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
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

export default Profile;
