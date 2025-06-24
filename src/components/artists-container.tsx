'use client';

import { useState } from 'react';
import { MainNav } from '@/components/main-nav';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { FiltersSidebar } from '@/components/filters-sidebar';

// Define a default structure for filter options to prevent type errors
const defaultFilterOptions = {
  categories: [],
  locations: [],
  priceRange: { min: 0, max: 10000 },
};

export default function ArtistsContainer({ children }: { children: React.ReactNode }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    locations: [],
    minPrice: defaultFilterOptions.priceRange.min,
    maxPrice: defaultFilterOptions.priceRange.max,
  });

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Discover Talented Artists</h1>
          <p className="text-lg text-muted-foreground">Find the perfect artist for your next event</p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search by name, category, or location..." className="pl-10" />
          </div>
          <Button variant="outline" onClick={() => setIsFiltersOpen(true)} className="ml-4">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* The data-fetched server component will be rendered here */}
        {children}

      </main>
      <FiltersSidebar 
        open={isFiltersOpen} 
        onOpenChange={setIsFiltersOpen} 
        filterOptions={defaultFilterOptions}
        activeFilters={activeFilters}
        onFiltersChange={setActiveFilters}
      />
    </div>
  );
}
