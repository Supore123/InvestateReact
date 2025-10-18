import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Ionicons name="business-outline" size={36} color="#fff" />
        <Text style={styles.title}>Investate Company</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>View Properties</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="trending-up-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Invest Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => navigation.navigate('Contact')}
        >
          <Ionicons name="mail-outline" size={20} color="#2563eb" />
          <Text style={styles.buttonOutlineText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 28,
    color: '#f1f5f9',
    fontWeight: '700',
    marginTop: 10,
  },
  buttons: {
    width: '100%',
    gap: 18,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonOutline: {
    flexDirection: 'row',
    borderColor: '#2563eb',
    borderWidth: 2,
    paddingVertical: 14,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonOutlineText: {
    color: '#2563eb',
    fontWeight: '600',
    fontSize: 16,
  },
});
