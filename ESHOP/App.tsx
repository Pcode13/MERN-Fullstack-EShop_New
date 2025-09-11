import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

const App: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text> Hello Typescript App mnmn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
