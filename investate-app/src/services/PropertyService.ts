import properties from '../data/properties.json';

export type Property = {
  id: string;
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
  type: string;
  last_updated: string;
};

class PropertyService {
  private properties: Property[] = properties;

  getAllProperties(): Property[] {
    return this.properties;
  }

  searchProperties(query: string): Property[] {
    const searchTerm = query.toLowerCase();
    return this.properties.filter(property => 
      property.address.toLowerCase().includes(searchTerm) ||
      property.city.toLowerCase().includes(searchTerm) ||
      property.state.toLowerCase().includes(searchTerm)
    );
  }

  getPropertyById(id: string): Property | undefined {
    return this.properties.find(property => property.id === id);
  }

  filterProperties(filters: {
    minPrice?: number;
    maxPrice?: number;
    minBeds?: number;
    minBaths?: number;
    city?: string;
    state?: string;
  }): Property[] {
    return this.properties.filter(property => {
      if (filters.minPrice && property.price < filters.minPrice) return false;
      if (filters.maxPrice && property.price > filters.maxPrice) return false;
      if (filters.minBeds && property.bedrooms < filters.minBeds) return false;
      if (filters.minBaths && property.bathrooms < filters.minBaths) return false;
      if (filters.city && property.city !== filters.city) return false;
      if (filters.state && property.state !== filters.state) return false;
      return true;
    });
  }
}

export const propertyService = new PropertyService();