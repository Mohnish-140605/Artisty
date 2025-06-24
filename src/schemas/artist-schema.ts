import * as yup from 'yup';

// Manually define the interface for the form data to ensure optional properties are correct
export interface ArtistFormData {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: {
    min: number;
    max: number;
  };
  location: string;
  email: string;
  phone?: string;
  website?: string;
  socialMedia: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    tiktok?: string;
  };
  experience: string;
  availability: boolean;
  profileImage?: any | null;
  termsAccepted: boolean;
}

// The schema now validates against the ArtistFormData interface
export const artistSchema: yup.ObjectSchema<ArtistFormData> = yup.object({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required').max(1000, 'Bio must be at most 1000 characters'),
  category: yup
    .array(yup.string().required())
    .min(1, 'Select at least one category')
    .required('Category is required'),
  languages: yup
    .array(yup.string().required())
    .min(1, 'Select at least one language')
    .required('At least one language is required'),
  feeRange: yup
    .object({
      min: yup.number().required('Minimum fee is required').min(0, 'Minimum fee must be 0 or more'),
      max: yup
        .number()
        .required('Maximum fee is required')
        .min(yup.ref('min'), 'Maximum fee must be greater than or equal to minimum fee'),
    })
    .required(),
  location: yup.string().required('Location is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^\+?[0-9\s-]+$/, { message: 'Invalid phone number', excludeEmptyString: true }),
  website: yup.string().url('Invalid URL'),
  socialMedia: yup.object({
    instagram: yup.string(),
    twitter: yup.string(),
    youtube: yup.string(),
    tiktok: yup.string(),
  }),
  experience: yup.string().required('Experience is required'),
  availability: yup.boolean().required('Please specify your availability'),
  profileImage: yup.mixed().nullable().test(
    'fileSize',
    'File is too large (max 5MB)',
    (value: any) => !value || value.length === 0 || (value[0] && value[0].size <= 5 * 1024 * 1024)
  ),
  termsAccepted: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

// Default values still conform to the interface
export const defaultValues: ArtistFormData = {
  name: '',
  bio: '',
  category: [],
  languages: [],
  feeRange: { min: 0, max: 1000 },
  location: '',
  email: '',
  phone: '',
  website: '',
  socialMedia: {
    instagram: '',
    twitter: '',
    youtube: '',
    tiktok: '',
  },
  experience: '',
  availability: false,
  profileImage: null,
  termsAccepted: false,
};
