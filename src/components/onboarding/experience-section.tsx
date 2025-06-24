'use client';

import type { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import type { ArtistFormData } from '@/schemas/artist-schema';
import { Input } from '../ui/input';

interface ExperienceSectionProps {
  form: UseFormReturn<ArtistFormData>;
}

export function ExperienceSection({ form }: ExperienceSectionProps) {
  const { control } = form;

  const experienceOptions = [
    { value: 'beginner', label: 'Just starting out' },
    { value: 'intermediate', label: '1-3 years of experience' },
    { value: 'experienced', label: '3-5 years of experience' },
    { value: 'professional', label: '5+ years of professional experience' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Experience & Rates</h2>
        <p className="text-muted-foreground">
          Share your experience level and set your performance rates.
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Level</FormLabel>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {experienceOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                      field.value === option.value
                        ? 'border-primary bg-primary/5'
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => field.onChange(option.value)}
                  >
                    <div
                      className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                        field.value === option.value
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground/30'
                      }`}
                    >
                      {field.value === option.value && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <Label className="font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="feeRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Fee Range: ${field.value?.min || 0} - ${field.value?.max || 1000} per event
              </FormLabel>
              <FormControl>
                <div className="px-2">
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={[field.value?.min || 0, field.value?.max || 1000]}
                    onValueChange={([min, max]) => field.onChange({ min, max })}
                    minStepsBetweenThumbs={1}
                    className="mb-4"
                  />
                </div>
              </FormControl>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <FormField
                  control={control}
                  name="feeRange.min"
                  render={({ field: minField }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Minimum</FormLabel>
                      <FormControl>
                        <div className="relative mt-1">
                           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                           <Input type="number" {...minField} className="pl-7" />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="feeRange.max"
                  render={({ field: maxField }) => (
                     <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Maximum</FormLabel>
                      <FormControl>
                        <div className="relative mt-1">
                           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                           <Input type="number" {...maxField} className="pl-7" />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="availability"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Currently Available</FormLabel>
                <p className="text-sm text-muted-foreground">
                  Are you currently available for bookings?
                </p>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
