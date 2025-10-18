import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>Email: info@investate.com</Text>
      <Text style={styles.text}>Phone: +44 1234 567890</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  text: {
    color: '#94a3b8',
    fontSize: 16,
    marginBottom: 6,
  },
});
