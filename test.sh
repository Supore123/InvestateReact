#!/bin/bash
set -e

APP_NAME="investate-app"

echo "🚀 Creating $APP_NAME with Expo (TypeScript template)..."
npx create-expo-app $APP_NAME --template expo-template-blank-typescript

cd $APP_NAME

echo "📦 Installing dependencies..."
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context @expo/vector-icons

echo "📁 Creating project structure..."
mkdir -p src/screens src/components src/theme

# ---------- HomeScreen ----------
cat > src/screens/HomeScreen.tsx << 'EOF'
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
EOF

# ---------- ContactScreen ----------
cat > src/screens/ContactScreen.tsx << 'EOF'
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
EOF

# ---------- App.tsx ----------
cat > App.tsx << 'EOF'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
EOF

echo "✅ All files created successfully!"
echo "📱 To start your app:"
echo "----------------------------------"
echo "cd $APP_NAME"
echo "npm start"
echo "----------------------------------"
echo "Then open Expo Go on your iPhone and scan the QR code."
