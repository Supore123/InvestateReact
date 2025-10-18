import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { Property } from '../services/PropertyService';

export type RootStackParamList = {
  MainMenu: undefined;
  Search: undefined;
  Favorites: undefined;
  Analytics: undefined;
  Settings: undefined;
  PropertyAnalytics: {
    property: Property;
  };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;