import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface PropertyStreetViewProps {
  address: string;
}

const API_KEY = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // This is a temporary development key for testing

// Known coordinates for famous London addresses
const KNOWN_LOCATIONS: { [key: string]: { lat: number; lng: number } } = {
  "221B Baker Street, Marylebone": { lat: 51.523767, lng: -0.158593 },
  "45 Kensington High Street, Kensington": { lat: 51.5002, lng: -0.1927 },
  "78 Notting Hill Gate, Notting Hill": { lat: 51.5093, lng: -0.1967 },
  "176 Camden High Street, Camden Town": { lat: 51.5392, lng: -0.1426 },
  "234 Portobello Road, Notting Hill": { lat: 51.5168, lng: -0.2025 },
  "10 Downing Street, Westminster": { lat: 51.5034, lng: -0.1276 },
  "Buckingham Palace, Westminster": { lat: 51.501364, lng: -0.141890 }
};

const PropertyStreetView: React.FC<PropertyStreetViewProps> = ({ address }) => {
  const styles = StyleSheet.create({
    container: {
      height: 300,
      width: '100%',
      marginVertical: 10,
      backgroundColor: '#f0f0f0',
    },
    image: {
      width: '100%',
      height: '100%',
    }
  });

  const coordinates = KNOWN_LOCATIONS[address];
  const streetViewUrl = coordinates
    ? `https://maps.googleapis.com/maps/api/streetview?key=${API_KEY}&size=600x300&location=${coordinates.lat},${coordinates.lng}&heading=210&pitch=10&fov=90`
    : `https://maps.googleapis.com/maps/api/streetview?key=${API_KEY}&size=600x300&location=${encodeURIComponent(address + ', London, UK')}`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: streetViewUrl }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default PropertyStreetView;