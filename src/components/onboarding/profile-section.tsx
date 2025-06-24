'use client';

import type { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MultiSelect } from '@/components/ui/multi-select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, User } from 'lucide-react';
import type { ArtistFormData } from '@/schemas/artist-schema';

interface ProfileSectionProps {
  form: UseFormReturn<ArtistFormData>;
}

export function ProfileSection({ form }: ProfileSectionProps) {
  const { control } = form;

  const categories = [
    { value: 'singer', label: 'Singer' },
    { value: 'dancer', label: 'Dancer' },
    { value: 'dj', label: 'DJ' },
    { value: 'speaker', label: 'Speaker' },
    { value: 'musician', label: 'Musician' },
    { value: 'actor', label: 'Actor' },
    { value: 'comedian', label: 'Comedian' },
    { value: 'magician', label: 'Magician' },
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'mandarin', label: 'Mandarin' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'arabic', label: 'Arabic' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        <p className="text-muted-foreground">
          Tell us about yourself and your artistic background.
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Picture */}
        <FormField
          control={control}
          name="profileImage"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage
                    src={field.value ? URL.createObjectURL(field.value) : ''}
                    alt="Profile"
                  />
                  <AvatarFallback className="bg-muted">
                    <User className="h-16 w-16 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>
                <label
                  htmlFor="profile-image"
                  className="absolute -bottom-2 -right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                >
                  <Camera className="h-5 w-5" />
                  <span className="sr-only">Upload profile image</span>
                </label>
                <input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Name */}
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bio */}
        <FormField
          control={control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your artistic journey"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location */}
        <FormField
          control={control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="e.g. New York, NY" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Categories */}
        <FormField
          control={control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <MultiSelect
                options={categories}
                selected={field.value || []}
                onChange={field.onChange}
                placeholder="Select categories..."
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Languages */}
        <FormField
          control={control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <MultiSelect
                options={languages}
                selected={field.value || []}
                onChange={field.onChange}
                placeholder="Select languages..."
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
