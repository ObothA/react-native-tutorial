import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function TextInputExample() {
  const [name, setName] = useState('Oboth');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g John Doe'
        onChangeText={(val) => setName(val)}
        multiline
      />

      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g 100'
        onChangeText={(val) => setAge(val)}
        keyboardType='numeric'
      />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
