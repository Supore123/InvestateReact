import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';
import { createThemedStyles, type ThemeColors } from '../theme/theme';
import LogoHeader from '../components/LogoHeader';

export default function MainMenuScreen() {
  const navigation = useNavigation();
  const { isDark, colors, toggleTheme } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const [showFamilyMenu, setShowFamilyMenu] = React.useState(false);

  const menuItems = [
    { icon: '🔍', label: 'Search Properties', screen: 'Search' },
    { icon: '⭐', label: 'Favorites', screen: 'Favorites' },
    { icon: '👤', label: 'Profile', screen: 'Profile' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LogoHeader showMembership={true} />
        
        <Text style={styles.greeting}>Welcome back, Jonathan Yohannes!</Text>

        {!showFamilyMenu ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.familyButton]}
              onPress={() => setShowFamilyMenu(true)}
            >
              <Text style={styles.buttonText}>Family House</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.investmentButton]}
              onPress={() => navigation.navigate('Analytics' as never)}
            >
              <Text style={styles.buttonText}>Investment</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setShowFamilyMenu(false)}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>

            <View style={styles.menuGrid}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuButton}
                  onPress={() => navigation.navigate(item.screen as never)}
                >
                  <Text style={styles.menuIcon}>{item.icon}</Text>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      padding: 20,
    },
    greeting: {
      fontSize: 24,
      fontWeight: '600',
      color: colors.text,
      marginVertical: 30,
      textAlign: 'center',
    },
    buttonContainer: {
      width: '100%',
      paddingHorizontal: 20,
      gap: 20,
    },
    button: {
      width: '100%',
      height: 60,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    familyButton: {
      backgroundColor: '#4CAF50',
    },
    investmentButton: {
      backgroundColor: '#2196F3',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    backButtonText: {
      fontSize: 18,
      color: colors.text,
      fontWeight: '600',
    },
    menuGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      gap: 20,
    },
    menuButton: {
      width: '45%',
      aspectRatio: 1,
      backgroundColor: colors.card,
      borderRadius: 15,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    menuIcon: {
      fontSize: 32,
      marginBottom: 10,
    },
    menuLabel: {
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    header: {
      alignItems: 'center',
      marginBottom: 40,
    },
    logo: {
      fontSize: 72,
      marginBottom: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.subtext,
    },
    themeSwitch: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    themeSwitchLabel: {
      fontSize: 16,
      color: colors.text,
      marginRight: 12,
    },
    menuGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 16,
      width: '100%',
      paddingHorizontal: 20,
    },
    menuButton: {
      width: '45%',
      aspectRatio: 1,
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    menuIcon: {
      fontSize: 32,
      marginBottom: 12,
    },
    menuLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.primary,
      textAlign: 'center',
    },
  });