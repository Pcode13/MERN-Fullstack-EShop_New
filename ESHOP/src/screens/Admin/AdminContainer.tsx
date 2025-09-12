import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

const AdminContainer: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text> Hello Typescript AdminContainer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AdminContainer;
