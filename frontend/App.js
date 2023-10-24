import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useChat } from 'ai';


export default function App() {
  const  { messages, handleSubmit, input } = useChat({
    api: "/api/chat"
  })
  return (
    <View style={styles.container}>
      <ul>
        {messages.forEach(message => {
        })}
      </ul>
      <StatusBar style="auto" />
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
});
