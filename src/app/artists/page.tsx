import { ArtistsPageClient } from '@/components/artists-page-client';
import { getArtists, getFilterOptions } from '@/data/artists';
import { Layout } from '@/components/layout';

export default async function ArtistsPage() {
    const initialArtists = await getArtists();
  const filterOptions = await getFilterOptions();

  return (
        <Layout>
      <div className="container">
        <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">Discover Talented Artists</h1>
        <p className="text-lg text-muted-foreground">Find the perfect artist for your next event</p>
      </div>
      <ArtistsPageClient
        initialArtists={initialArtists}
                filterOptions={filterOptions}
      />
      </div>
    </Layout>
  );
}
