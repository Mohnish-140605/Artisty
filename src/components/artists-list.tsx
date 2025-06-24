"use client";

import { useState } from 'react';
import type { Artist } from '@/types/artist';
import { ArtistCard } from './artist-card';
import { ArtistProfileCard } from './artist-profile-card';

interface ArtistsListContentProps {
  artists: Artist[];
}

export function ArtistsListContent({ artists }: ArtistsListContentProps) {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleViewProfile = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleCloseProfile = () => {
    setSelectedArtist(null);
  };

  const groupedArtists = artists.reduce((acc, artist) => {
    const category = artist.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(artist);
    return acc;
  }, {} as Record<string, Artist[]>);

  const categoryOrder = ['Singers', 'Dancers', 'DJ', 'Speakers'];

  return (
    <div className="w-full">
      {categoryOrder.map((category) => {
        const categoryArtists = groupedArtists[category];
        if (!categoryArtists || categoryArtists.length === 0) {
          return null;
        }
        return (
          <div key={category} className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-primary tracking-wider border-b-2 border-primary/50 pb-2">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {categoryArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} onViewProfile={handleViewProfile} />
              ))}
            </div>
          </div>
        );
      })}

      {artists.length === 0 && (
        <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No artists found matching your criteria.</p>
        </div>
      )}

      {selectedArtist && (
        <ArtistProfileCard artist={selectedArtist} onClose={handleCloseProfile} />
      )}
    </div>
  );
}
