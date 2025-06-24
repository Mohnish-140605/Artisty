export type Artist = {
  id: string;
  name: string;
  category: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  bio: string;
  languages: string[];
  featured: boolean;
};

export type FilterOptions = {
  categories: string[];
  locations: string[];
  priceRange: {
    min: number;
    max: number;
  };
};
