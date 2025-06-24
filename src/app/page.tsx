import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Singers',
    description: 'Find the perfect vocal talent for your event',
    icon: '🎤',
    href: '/artists?category=singers',
  },
  {
    id: 2,
    name: 'Dancers',
    description: 'Energize your event with amazing dance performances',
    icon: '💃',
    href: '/artists?category=dancers',
  },
  {
    id: 3,
    name: 'Speakers',
    description: 'Inspire your audience with engaging speakers',
    icon: '🎙️',
    href: '/artists?category=speakers',
  },
  {
    id: 4,
    name: 'DJs',
    description: 'Keep the party going with top DJ talent',
    icon: '🎧',
    href: '/artists?category=djs',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Discover Amazing Talent for Your Next Event
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect with professional artists, performers, and speakers who will make your event unforgettable.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search for artists, categories..."
                    type="search"
                  />
                </div>
                <Button className="w-full" asChild>
                  <Link href="/artists">Find Talent</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Browse by Category
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find the perfect talent from our diverse categories
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl transition-transform group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
                Ready to find the perfect talent?
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
                Join thousands of event organizers who found their perfect match on Artistly.
              </p>
              <Button className="mt-4" size="lg" asChild>
                <Link href="/artists">Browse Artists</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
