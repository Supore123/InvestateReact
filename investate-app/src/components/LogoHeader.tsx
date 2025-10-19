import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface LogoHeaderProps {
  showMembership?: boolean;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ showMembership = false }) => {
  return (
    <View style={styles.header}>
      {showMembership && (
        <Text style={styles.membershipText}>GOLD TIER</Text>
      )}
      <Image
        source={require('../../assets/investate.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Investate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  membershipText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LogoHeader;