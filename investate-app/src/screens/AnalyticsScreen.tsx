import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';

export default function AnalyticsScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  const investmentStrategies = [
    {
      title: 'Buy-to-Let',
      description: 'Purchase properties to generate rental income',
      roi: '4-8% annually',
      risk: 'Medium'
    },
    {
      title: 'Property Flip',
      description: 'Buy, renovate, and sell for profit',
      roi: '10-30% per project',
      risk: 'High'
    },
    {
      title: 'REIT Investment',
      description: 'Invest in Real Estate Investment Trusts',
      roi: '2-6% annually',
      risk: 'Low'
    },
    {
      title: 'Commercial Property',
      description: 'Invest in office or retail spaces',
      roi: '6-12% annually',
      risk: 'Medium-High'
    }
  ];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Investment Hub</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('Search' as never)}
        >
          <Text style={styles.searchButtonText}>🔍 Search Investment Properties</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Investment Strategies</Text>
          <View style={styles.strategiesGrid}>
            {investmentStrategies.map((strategy, index) => (
              <TouchableOpacity
                key={index}
                style={styles.strategyCard}
                onPress={() => {/* Navigate to strategy details */}}
              >
                <Text style={styles.strategyTitle}>{strategy.title}</Text>
                <Text style={styles.strategyDescription}>{strategy.description}</Text>
                <View style={styles.strategyMetrics}>
                  <Text style={styles.metricText}>ROI: {strategy.roi}</Text>
                  <Text style={styles.metricText}>Risk: {strategy.risk}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Market Analysis</Text>
          <View style={styles.analysisCard}>
            <Text style={styles.analysisText}>
              Current market trends and property analytics will be displayed here,
              helping you make informed investment decisions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: 16,
  },
  scrollView: {
    flex: 1,
  },
  searchButton: {
    margin: 16,
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  strategiesGrid: {
    gap: 16,
  },
  strategyCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  strategyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  strategyDescription: {
    fontSize: 14,
    color: colors.subtext,
    marginBottom: 12,
  },
  strategyMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  analysisCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  analysisText: {
    fontSize: 14,
    color: colors.subtext,
    lineHeight: 20,
  },
});