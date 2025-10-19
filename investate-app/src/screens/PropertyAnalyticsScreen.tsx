import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart } from 'react-native-chart-kit';
import PropertyStreetView from '../components/PropertyStreetView';

type Property = {
  address: string;
  city: string;
  state: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  cap_rate: number;
  cash_flow: number;
  roi: number;
  vacancy_rate: number;
};

type Props = {
  route: {
    params: {
      property: Property;
    };
  };
};

export default function PropertyAnalyticsScreen({ route }: Props) {
  const { property } = route.params;

  const chartData = {
    labels: ['Cap Rate', 'ROI', 'Vacancy'],
    datasets: [{
      data: [property.cap_rate, property.roi, property.vacancy_rate]
    }]
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(255, 56, 92, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.7,
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.propertyTitle}>{property.address}</Text>
          <PropertyStreetView address={`${property.address}, ${property.city}, ${property.state}`} />
          <Text style={styles.propertySubtitle}>
            {property.city}, {property.state}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Property Details</Text>
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailValue}>${property.price.toLocaleString()}</Text>
              <Text style={styles.detailLabel}>Price</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailValue}>{property.bedrooms}</Text>
              <Text style={styles.detailLabel}>Beds</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailValue}>{property.bathrooms}</Text>
              <Text style={styles.detailLabel}>Baths</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailValue}>{property.sqft.toLocaleString()}</Text>
              <Text style={styles.detailLabel}>Sq.Ft</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Investment Metrics</Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricItem}>
              <Text style={[styles.metricValue, { color: '#4CAF50' }]}>
                {property.cap_rate}%
              </Text>
              <Text style={styles.metricLabel}>Cap Rate</Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={[styles.metricValue, { color: '#FFA000' }]}>
                ${property.cash_flow}
              </Text>
              <Text style={styles.metricLabel}>Cash Flow</Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={[styles.metricValue, { color: '#FF385C' }]}>
                {property.roi}%
              </Text>
              <Text style={styles.metricLabel}>ROI</Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={[styles.metricValue, { color: '#F44336' }]}>
                {property.vacancy_rate}%
              </Text>
              <Text style={styles.metricLabel}>Vacancy</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Performance Chart</Text>
          <BarChart
            data={chartData}
            width={Dimensions.get('window').width - 48}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
            showValuesOnTopOfBars
            fromZero
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  propertyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 4,
  },
  propertySubtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F1F1F',
    marginBottom: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F1F1F',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItem: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#666',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});