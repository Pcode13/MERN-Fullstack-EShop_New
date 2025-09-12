// src/components/SearchBar.tsx
import React, { FC } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons'; // install: react-native-vector-icons

interface SearchBarProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  onChangeText,
  onClear,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {/* Left Search Icon */}
      <Icon name="search" size={20} color="#888" style={styles.icon} />

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />

      {/* Clear button */}
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <Icon
            name="close-circle"
            size={20}
            color="#888"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dee5e2ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    margin: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
