import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

interface HeaderProps {
  title: string;
  logo?: any; // optional: if you want to pass a custom image
}

const Header: FC<HeaderProps> = ({ title, logo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={logo ?? require('../assets/Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<{
  container: ViewStyle;
  content: ViewStyle;
  logo: ImageStyle;
  title: TextStyle;
}>({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    // width: '100%',
    // padding: 10,
    // flexShrink: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default Header;
