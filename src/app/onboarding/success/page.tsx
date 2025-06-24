'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';

export default function OnboardingSuccess() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Application Submitted Successfully!
          </h1>
          
          <p className="text-muted-foreground text-lg">
            Thank you for applying to become an artist on Artistly. Our team will review your 
            application and get back to you within 3-5 business days.
          </p>
          
          <p className="text-muted-foreground">
            In the meantime, you can explore our platform and discover other talented artists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/artists" className="inline-flex items-center">
                Browse Artists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/" className="inline-flex items-center">
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
