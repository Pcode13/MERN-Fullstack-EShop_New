import React, { FC, ReactNode } from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { isAndroidFullScreenMode } from '../utils/helper';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  background?: string;
}

const Page: FC<Props> = ({ children, style, background }) => {
  let backgroundColor = background || '#ffffff';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {/* iOS automatically handles safe area, so only set paddingTop for Android */}
      <View
        style={[
          styles.innerContainer,
          style,
          Platform.OS === 'android' && {
            paddingTop: isAndroidFullScreenMode()
              ? StatusBar.currentHeight
              : 50,
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
});

export default Page;
