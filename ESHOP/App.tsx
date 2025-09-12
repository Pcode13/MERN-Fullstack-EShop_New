import React, { FC } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Header from './src/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductHome from './src/screens/Products/ProductHome';

interface Props {}

const App: FC<Props> = () => {
  return <ProductHome />;
  //   // <SafeAreaView style={styles.container}>
  //   //   {/* StatusBar config */}
  //   //   <StatusBar barStyle="dark-content" backgroundColor="#1e88e5" />
  //     <ProductHome />
  //   {/* </SafeAreaView> */}
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
