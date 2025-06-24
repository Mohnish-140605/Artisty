import { NextResponse } from 'next/server';
import { getArtists, getFilterOptions } from '@/data/artists';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Get filter parameters from query string
  const categories = searchParams.get('categories')?.split(',') || [];
  const locations = searchParams.get('locations')?.split(',') || [];
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const searchQuery = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');

  // Get filtered artists
  const filteredArtists = getArtists({
    categories,
    locations,
    minPrice: minPrice ? parseInt(minPrice) : undefined,
    maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
    searchQuery,
  });

  // Get filter options
  const filterOptions = getFilterOptions();

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedArtists = filteredArtists.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredArtists.length / limit);

  return NextResponse.json({
    data: paginatedArtists,
    meta: {
      total: filteredArtists.length,
      page,
      totalPages,
      limit,
    },
    filters: filterOptions,
  });
}
