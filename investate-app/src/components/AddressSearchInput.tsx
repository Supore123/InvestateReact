import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlacesInput from 'react-native-places-input';

interface AddressSearchInputProps {
  onAddressSelect: (address: {
    description: string;
    place_id: string;
    result: {
      formatted_address: string;
    };
  }) => void;
}

const AddressSearchInput: React.FC<AddressSearchInputProps> = ({ onAddressSelect }) => {
  return (
    <View style={styles.container}>
      <PlacesInput
        googleApiKey="YOUR_GOOGLE_MAPS_API_KEY"
        placeHolder="Search for an address"
        language="en-UK"
        onSelect={(place) => {
          onAddressSelect({
            description: place.result.formatted_address,
            place_id: place.place_id,
            result: place.result
          });
        }}
        stylesContainer={styles.inputContainer}
        stylesInput={styles.input}
        stylesList={styles.list}
        stylesItem={styles.item}
        queryCountries={['uk']}
        requiredCharactersBeforeSearch={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  inputContainer: {
    position: 'relative',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 16,
  },
  list: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default AddressSearchInput;