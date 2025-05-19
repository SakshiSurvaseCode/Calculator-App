import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={input} editable={false} />
      <View style={styles.row}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
      </View>
      <View style={styles.row}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
      </View>
      <View style={styles.row}>
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="+" onPress={() => handlePress('+')} />
        <Button title="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.row}>
        <Button title="" onPress={() => handlePress('')} />
        <Button title="/" onPress={() => handlePress('/')} />
        <Button title="=" onPress={handleCalculate} color="green" />
      </View>
      <Button title="C" onPress={handleClear} />
      <Text style={styles.footer}>Calc by Maansi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'right',
    fontSize: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    fontSize: 16,
    color: '#aaa',
  },
});