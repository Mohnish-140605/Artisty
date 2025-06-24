'use client';

import React from 'react';
import { X, Filter, Wind, Swords, Waves, Tornado } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import type { FilterOptions } from '@/types/artist';

interface FiltersSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filterOptions: FilterOptions;
  activeFilters: {
    categories: string[];
    locations: string[];
    minPrice: number;
    maxPrice: number;
  };
  onFiltersChange: (filters: any) => void;
}

const categoryIcons: { [key: string]: React.ElementType } = {
  Singers: Wind,
  Dancers: Swords,
  Speakers: Waves,
  DJ: Tornado,
};

export function FiltersSidebar({ 
  open, 
  onOpenChange, 
  filterOptions, 
  activeFilters, 
  onFiltersChange 
}: FiltersSidebarProps) {

  const handleCategoryChange = (category: string) => {
    const newCategories = activeFilters.categories.includes(category)
      ? activeFilters.categories.filter((c: string) => c !== category)
      : [...activeFilters.categories, category];
    onFiltersChange({ ...activeFilters, categories: newCategories });
  };

  const handleLocationChange = (location: string) => {
    const newLocations = activeFilters.locations.includes(location)
      ? activeFilters.locations.filter((l: string) => l !== location)
      : [...activeFilters.locations, location];
    onFiltersChange({ ...activeFilters, locations: newLocations });
  };

  const handlePriceChange = (value: [number, number]) => {
    onFiltersChange({ ...activeFilters, minPrice: value[0], maxPrice: value[1] });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full max-w-sm p-0 flex flex-col">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center text-primary">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </SheetTitle>
        </SheetHeader>
        <div className="sticky top-20 space-y-6 overflow-y-auto flex-grow">
          <div className="space-y-4">
            <h4 className="font-semibold">Category</h4>
            <div className="grid grid-cols-2 gap-4">
              {filterOptions.categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`cat-${category}`}
                    checked={activeFilters.categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={`cat-${category}`} className="text-sm flex items-center cursor-pointer hover:text-primary transition-colors">
                    {React.createElement(categoryIcons[category] || Filter, { className: 'mr-2 h-4 w-4 text-primary' })}
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Location</h4>
            <div className="grid grid-cols-2 gap-4">
              {filterOptions.locations.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={`loc-${location}`}
                    checked={activeFilters.locations.includes(location)}
                    onCheckedChange={() => handleLocationChange(location)}
                  />
                  <Label htmlFor={`loc-${location}`} className="text-sm font-normal cursor-pointer hover:text-primary transition-colors">
                    {location}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Price Range (INR)</h4>
            <Slider
              min={filterOptions.priceRange.min}
              max={filterOptions.priceRange.max}
              step={10000}
              value={[activeFilters.minPrice, activeFilters.maxPrice]}
              onValueChange={(value) => handlePriceChange(value as [number, number])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₹{activeFilters.minPrice.toLocaleString('en-IN')}</span>
              <span>₹{activeFilters.maxPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
        <div className="p-6 border-t flex justify-end">
            <Button onClick={() => onOpenChange(false)}>Done</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
