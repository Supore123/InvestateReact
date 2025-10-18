import { StyleSheet } from 'react-native';

export const Colors = {
  light: {
    primary: '#FF385C',
    background: '#f5f5f5',
    card: '#FFFFFF',
    text: '#1F1F1F',
    subtext: '#666666',
    border: '#EEEEEE',
    shadow: '#000000',
    positive: '#4CAF50',
    neutral: '#FFA000',
    negative: '#F44336',
  },
  dark: {
    primary: '#FF385C',
    background: '#121212',
    card: '#242424',
    text: '#FFFFFF',
    subtext: '#AAAAAA',
    border: '#333333',
    shadow: '#000000',
    positive: '#66BB6A',
    neutral: '#FFB74D',
    negative: '#EF5350',
  },
};

export type ThemeColors = typeof Colors.light;

export const createThemedStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.subtext,
      marginBottom: 16,
    },
    input: {
      backgroundColor: colors.background,
      color: colors.text,
      padding: 12,
      borderRadius: 12,
      fontSize: 16,
    },
    menuButton: {
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
    menuLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.primary,
      textAlign: 'center',
    },
    propertyCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    propertyTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.text,
    },
    propertyPrice: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.primary,
    },
    propertyDetails: {
      color: colors.subtext,
      marginBottom: 16,
    },
    metricValue: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 4,
    },
    metricLabel: {
      fontSize: 12,
      color: colors.subtext,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: 16,
    },
  });