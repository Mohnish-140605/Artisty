import type { Artist, FilterOptions } from '@/types/artist';

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Arijit Singh',
    category: 'Singers',
    location: 'Mumbai, MH',
    price: 1250000,
    rating: 4.9,
    reviewCount: 500,
    image: '/arijit.png',
    bio: 'Arijit Singh is an Indian singer and music composer. He is the recipient of several accolades including a National Film Award and seven Filmfare Awards.',
    languages: ['Hindi', 'Bengali', 'English'],
    featured: true,
  },
  {
    id: '2',
    name: 'Nucleya',
    category: 'DJ',
    location: 'Goa, GA',
    price: 1900000,
    rating: 4.8,
    reviewCount: 350,
    image: '/nucleya.png',
    bio: 'Udyan Sagar, better known by his stage name Nucleya, is an Indian electronic music producer. He is known for his unique brand of bass-heavy music.',
    languages: ['English', 'Hindi'],
    featured: true,
  },
  {
    id: '3',
    name: 'Terence Lewis',
    category: 'Dancers',
    location: 'Mumbai, MH',
    price: 900000,
    rating: 4.7,
    reviewCount: 200,
    image: '/terrence.png',
    bio: 'Terence Lewis is an Indian dancer and choreographer, specializing in contemporary dance. He is known as a choreographer and judge in reality dance series.',
    languages: ['English', 'Hindi'],
    featured: false,
  },
  {
    id: '4',
    name: 'Gaur Gopal Das',
    category: 'Speakers',
    location: 'Mumbai, MH',
    price: 1600000,
    rating: 4.9,
    reviewCount: 450,
    image: '/gaur.png',
    bio: 'Gaur Gopal Das is an Indian monk, motivational speaker and lifestyle coach. He is a member of the International Society for Krishna Consciousness (ISKCON).',
    languages: ['English', 'Hindi'],
    featured: true,
  },
  {
    id: '5',
    name: 'Shreya Ghoshal',
    category: 'Singers',
    location: 'Mumbai, MH',
    price: 1100000,
    rating: 5.0,
    reviewCount: 600,
    image: '/shreya.png',
    bio: 'Shreya Ghoshal is an Indian singer. She has received four National Film Awards, seven Filmfare Awards and ten IIFA Awards.',
    languages: ['Hindi', 'Bengali', 'Tamil', 'Telugu', 'English'],
    featured: true,
  },
  {
    id: '6',
    name: 'Sandeep Maheshwari',
    category: 'Speakers',
    location: 'Delhi, DL',
    price: 0, // Often provides free sessions
    rating: 4.9,
    reviewCount: 1000,
    image: '/sandeep.png',
    bio: 'Sandeep Maheshwari is a motivational speaker, photographer and entrepreneur. He is the founder and CEO of ImagesBazaar.',
    languages: ['Hindi', 'English'],
    featured: true,
  },
];

export const getFilterOptions = (): FilterOptions => {
  const categories = Array.from(new Set(mockArtists.map((artist) => artist.category)));
  const locations = Array.from(new Set(mockArtists.map((artist) => artist.location)));
  const allPrices = mockArtists.map((artist) => artist.price);

  return {
    categories,
    locations,
    priceRange: {
      min: Math.min(...allPrices),
      max: Math.max(...allPrices),
    },
  };
};

// The filtering logic is now handled in the ArtistsPageClient component.
// This function simply returns all artists.
export const getArtists = (): Artist[] => {
  return mockArtists;
};
