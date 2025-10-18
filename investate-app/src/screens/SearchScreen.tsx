import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { propertyService, type Property } from '../services/PropertyService';
import { RootStackNavigationProp } from '../types/navigation';

export default function SearchScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async (searchTerm?: string) => {
    try {
      setLoading(true);
      const data = searchTerm 
        ? propertyService.searchProperties(searchTerm)
        : propertyService.getAllProperties();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMetricColor = (value: number, type: 'cap_rate' | 'cash_flow' | 'roi') => {
    switch (type) {
      case 'cap_rate':
        return value >= 8 ? '#4CAF50' : value >= 5 ? '#FFA000' : '#F44336';
      case 'cash_flow':
        return value >= 500 ? '#4CAF50' : value >= 0 ? '#FFA000' : '#F44336';
      case 'roi':
        return value >= 15 ? '#4CAF50' : value >= 8 ? '#FFA000' : '#F44336';
      default:
        return '#666';
    }
  };

  const renderProperty = ({ item }: { item: Property }) => (
    <TouchableOpacity
      style={styles.propertyCard}
      onPress={() => navigation.navigate('PropertyAnalytics', { property: item })}
    >
      <View style={styles.propertyHeader}>
        <Text style={styles.propertyTitle}>{item.address}</Text>
        <Text style={styles.propertyPrice}>${item.price.toLocaleString()}</Text>
      </View>

      <Text style={styles.propertyDetails}>
        {item.city}, {item.state} • {item.bedrooms} beds • {item.bathrooms} baths • {item.sqft.toLocaleString()} sq.ft
      </Text>

      <View style={styles.metricsGrid}>
        <View style={styles.metric}>
          <Text style={[styles.metricValue, { color: getMetricColor(item.cap_rate, 'cap_rate') }]}>
            {item.cap_rate}%
          </Text>
          <Text style={styles.metricLabel}>Cap Rate</Text>
        </View>

        <View style={styles.metric}>
          <Text style={[styles.metricValue, { color: getMetricColor(item.cash_flow, 'cash_flow') }]}>
            ${item.cash_flow}
          </Text>
          <Text style={styles.metricLabel}>Cash Flow</Text>
        </View>

        <View style={styles.metric}>
          <Text style={[styles.metricValue, { color: getMetricColor(item.roi, 'roi') }]}>
            {item.roi}%
          </Text>
          <Text style={styles.metricLabel}>ROI</Text>
        </View>

        <View style={styles.metric}>
          <Text style={styles.metricValue}>{item.vacancy_rate}%</Text>
          <Text style={styles.metricLabel}>Vacancy</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search properties..."
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            fetchProperties(text);
          }}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#FF385C" style={styles.loader} />
      ) : (
        <FlatList
          data={properties}
          renderItem={renderProperty}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchSection: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
  },
  propertyCard: {
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
  propertyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F1F1F',
    flex: 1,
  },
  propertyPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF385C',
  },
  propertyDetails: {
    color: '#666',
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  metric: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#666',
  },
});