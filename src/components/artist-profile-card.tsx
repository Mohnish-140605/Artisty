"use client";

import Image from 'next/image';
import Link from 'next/link';
import { X, Star, MapPin, Languages, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Artist } from '@/types/artist';

interface ArtistProfileCardProps {
  artist: Artist;
  onClose: () => void;
}

export function ArtistProfileCard({ artist, onClose }: ArtistProfileCardProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl rounded-xl border border-purple-500/30 bg-gray-900/80 p-8 shadow-2xl shadow-purple-500/20">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-4 top-4 h-8 w-8 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={artist.image}
                alt={`${artist.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-white">{artist.name}</h2>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center text-sm text-purple-400">
                <Star className="mr-1.5 h-4 w-4 fill-current" />
                {artist.rating} ({artist.reviewCount} reviews)
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="mr-1.5 h-4 w-4" />
                {artist.location}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span
                className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300"
              >
                {artist.category}
              </span>
            </div>

            <p className="mt-6 text-gray-300">{artist.bio}</p>

            <div className="mt-6 border-t border-purple-500/20 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-400">
                  <IndianRupee className="mr-2 h-4 w-4" />
                  <span>
                    Starts from {artist.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 })} / event
                  </span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Languages className="mr-2 h-4 w-4" />
                  <span>{artist.languages.join(', ')}</span>
                </div>
              </div>
            </div>

                        <div className="mt-8 flex justify-end">
              <Link href="/booking" passHref>
                <Button size="lg">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
