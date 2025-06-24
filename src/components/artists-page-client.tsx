'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';
import { FiltersSidebar } from './filters-sidebar';
import { ArtistsListContent } from './artists-list';
import { useDebounce } from '@/hooks/use-debounce';
import type { Artist, FilterOptions } from '@/types/artist';

interface ArtistsPageClientProps {
  initialArtists: Artist[];
  filterOptions: FilterOptions;
}

export function ArtistsPageClient({ initialArtists, filterOptions }: ArtistsPageClientProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [activeFilters, setActiveFilters] = useState({
    categories: [] as string[],
    locations: [] as string[],
    minPrice: filterOptions.priceRange.min,
    maxPrice: filterOptions.priceRange.max,
  });

  const filteredArtists = useMemo(() => {
    return initialArtists.filter(artist => {
      const searchMatch = artist.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      const categoryMatch = activeFilters.categories.length === 0 || activeFilters.categories.includes(artist.category);
      const locationMatch = activeFilters.locations.length === 0 || activeFilters.locations.includes(artist.location);
      const priceMatch = artist.price >= activeFilters.minPrice && artist.price <= activeFilters.maxPrice;

      return searchMatch && categoryMatch && locationMatch && priceMatch;
    });
  }, [initialArtists, debouncedSearchTerm, activeFilters]);

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <div className="relative w-full max-w-md">
                    <Input
            placeholder="Search by artist name..."
            className="pl-10 rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
                <Button variant="outline" onClick={() => setFiltersOpen(true)}>
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
      <FiltersSidebar 
        open={filtersOpen} 
        onOpenChange={setFiltersOpen} 
        filterOptions={filterOptions}
        activeFilters={activeFilters}
        onFiltersChange={setActiveFilters}
      />
      <ArtistsListContent artists={filteredArtists} />
    </div>
  );
}
