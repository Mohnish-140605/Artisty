import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Artist } from '@/types/artist';

interface ArtistCardProps {
  artist: Artist;
  onViewProfile: (artist: Artist) => void;
}

export function ArtistCard({ artist, onViewProfile }: ArtistCardProps) {
  return (
    <div className="bg-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      {artist.featured && (
        <div className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Featured
        </div>
      )}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={artist.image}
          alt={`${artist.name} performing`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{artist.name}</h3>
            <div className="mt-1 flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              {artist.location}
            </div>
          </div>
          <div className="flex items-center rounded-md bg-wisteria-500/10 px-2 py-1 text-sm font-medium text-wisteria-300">
            <Star className="mr-1 h-4 w-4 fill-current" />
            {artist.rating}
            <span className="text-wisteria-300/70 ml-1">({artist.reviewCount})</span>
          </div>
        </div>

        <div className="mt-3">
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-300">
            {artist.category}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground flex-grow">
          {artist.bio}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-lg font-semibold text-wisteria-400">
              ₹{artist.price.toLocaleString('en-IN')}
            </p>
          </div>
          <Button size="sm" onClick={() => onViewProfile(artist)}>
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
