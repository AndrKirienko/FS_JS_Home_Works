import * as yup from 'yup'

export const PHONE_VALIDATION_SCHEMA = yup.object({
  model: yup
    .string()
    .min(2, 'Model must be at least 2 characters')
    .required('Model is required'),
  brand: yup
    .string()
    .min(2, 'Brand must be at least 2 characters')
    .required('Brand is required'),
  dateRelease: yup
    .date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Release date is required'),
  ram: yup
    .number()
    .min(1, 'RAM must be at least 1GB')
    .required('RAM is required'),
  processor: yup
    .string()
    .min(2, 'Processor must be at least 2 characters')
    .required('Processor is required'),
  diagonal: yup
    .number()
    .min(3, 'Diagonal must be at least 3 inches')
    .required('Diagonal is required'),
  isNFC: yup.boolean().required('NFC support is required'),
})
