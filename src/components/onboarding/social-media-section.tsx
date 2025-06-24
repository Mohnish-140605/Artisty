'use client';

import type { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Phone, Globe, Instagram, Twitter, Youtube, Music2 } from 'lucide-react';
import type { ArtistFormData } from '@/schemas/artist-schema';

interface SocialMediaSectionProps {
  form: UseFormReturn<ArtistFormData>;
}

export function SocialMediaSection({ form }: SocialMediaSectionProps) {
  const { control } = form;

  const socialMediaIcons = {
    instagram: <Instagram className="h-4 w-4 text-pink-600" />,
    twitter: <Twitter className="h-4 w-4 text-blue-400" />,
    youtube: <Youtube className="h-4 w-4 text-red-600" />,
    tiktok: <Music2 className="h-4 w-4 text-foreground" />,
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Contact & Social Media</h2>
        <p className="text-muted-foreground">
          Share your contact information and social media profiles.
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="your@email.com"
                    className="pl-10"
                    type="email"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>
                This will be used for account notifications and booking inquiries.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="+1 (555) 000-0000"
                    className="pl-10"
                    type="tel"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>
                Include country code. This helps with international bookings.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="https://yourwebsite.com"
                    className="pl-10"
                    type="url"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <h3 className="text-lg font-medium mb-4">Social Media Profiles</h3>
          <div className="space-y-4">
            {Object.entries(socialMediaIcons).map(([platform, icon]) => (
              <FormField
                key={platform}
                control={control}
                name={`socialMedia.${platform}` as keyof ArtistFormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize flex items-center">
                      <span className="mr-2">{icon}</span>
                      {platform === 'tiktok' ? 'TikTok' : platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          @
                        </span>
                        <Input
                          placeholder={`your${platform !== 'youtube' ? `_${platform}` : ''}username`}
                          className="pl-10"
                          {...field}
                          value={field.value || ''}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        <FormField
          control={control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the terms and conditions
                </FormLabel>
                <FormDescription>
                  By submitting this form, you agree to our{' '}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
