import React, { FC } from 'react';
import { View, StyleSheet,Text } from 'react-native';

interface Props {}

const CartContainer: FC<Props> = () => {
  return <View style={styles.container}>
            <Text> Hello Typescript CartContainer</Text>
         </View>
};

const styles = StyleSheet.create({
 container:{},
});

export default CartContainer;