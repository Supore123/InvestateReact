import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';
import { createThemedStyles, type ThemeColors } from '../theme/theme';

export default function MainMenuScreen() {
  const navigation = useNavigation();
  const { isDark, colors, toggleTheme } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  const menuItems = [
    { icon: '🔍', label: 'Search Properties', screen: 'Search' },
    { icon: '⭐', label: 'Favorites', screen: 'Favorites' },
    { icon: '📊', label: 'Analytics', screen: 'Analytics' },
    { icon: '⚙️', label: 'Settings', screen: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>🏠</Text>
          <Text style={styles.title}>Investate</Text>
          <Text style={styles.subtitle}>Smart Property Investment</Text>
        </View>

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