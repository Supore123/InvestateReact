import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { Property } from '../services/PropertyService';

export type RootStackParamList = {
  MainMenu: undefined;
  Search: undefined;
  Favorites: undefined;
  Profile: undefined;
  Settings: undefined;
  PropertyAnalytics: {
    property: Property;
  };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;