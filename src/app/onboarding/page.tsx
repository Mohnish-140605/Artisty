'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from '@/components/ui/use-toast';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { CheckCircle, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { artistSchema, defaultValues } from '@/schemas/artist-schema';
import type { ArtistFormData } from '@/schemas/artist-schema';
import { ProfileSection } from '@/components/onboarding/profile-section';
import { ExperienceSection } from '@/components/onboarding/experience-section';
import { SocialMediaSection } from '@/components/onboarding/social-media-section';

import { Layout } from '@/components/layout';

export default function OnboardingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<ArtistFormData>({
    resolver: yupResolver(artistSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit = async (data: ArtistFormData) => {
    setIsSubmitting(true);

    try {
      // In a real app, you would send this data to your API
      console.log('Form submitted:', data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: 'Success!',
        description: 'Your artist profile has been submitted for review.',
      });

      // Redirect to success page or dashboard
      router.push('/onboarding/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    // Validate current step before proceeding
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate as any);

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return ['name', 'email', 'phone', 'location', 'artistType'];
      case 2:
        return ['experienceLevel', 'genres', 'bio'];
      case 3:
        return ['website', 'socialMedia.twitter', 'socialMedia.instagram'];
      default:
        return [];
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProfileSection form={form} />;
      case 2:
        return <ExperienceSection form={form} />;
      case 3:
        return <SocialMediaSection form={form} />;
      default:
        return null;
    }
  };

  const totalSteps = 3;
  const isLastStep = currentStep === totalSteps;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Become an Artist on Artistly
          </h1>
          <p className="text-muted-foreground">
            Complete your profile to start getting booked for events
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-4">
            {[...Array(totalSteps)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${i + 1 === currentStep
                      ? 'bg-primary text-primary-foreground'
                      : i + 1 < currentStep
                        ? 'bg-primary/50 text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                >
                  {i + 1 < currentStep ? <CheckCircle size={16} /> : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div className="w-16 h-0.5 bg-muted mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>

              {isLastStep ? (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting</>
                  ) : (
                    'Submit Profile'
                  )}
                </Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </Layout>
  );
}
