export type ContactFormData = {
  name: string;
  mobile: string;
  email: string;
  message: string;
};

export type ContactFormField = keyof ContactFormData;

export type ContactFormErrors = Partial<Record<ContactFormField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_PATTERN = /^[0-9]{10}$/;

const FIELD_LIMITS = {
  name: { min: 2, max: 100 },
  mobile: { min: 10, max: 10 },
  email: { min: 5, max: 254 },
  message: { min: 10, max: 2000 },
} as const;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = data.name.trim();
  const mobile = data.mobile.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < FIELD_LIMITS.name.min) {
    errors.name = `Name must be at least ${FIELD_LIMITS.name.min} characters.`;
  } else if (name.length > FIELD_LIMITS.name.max) {
    errors.name = `Name must be at most ${FIELD_LIMITS.name.max} characters.`;
  }

  if (!mobile) {
    errors.mobile = "Mobile number is required.";
  } else if (!MOBILE_PATTERN.test(mobile)) {
    errors.mobile = "Please enter a valid 10-digit mobile number.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (email.length > FIELD_LIMITS.email.max) {
    errors.email = `Email must be at most ${FIELD_LIMITS.email.max} characters.`;
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < FIELD_LIMITS.message.min) {
    errors.message = `Message must be at least ${FIELD_LIMITS.message.min} characters.`;
  } else if (message.length > FIELD_LIMITS.message.max) {
    errors.message = `Message must be at most ${FIELD_LIMITS.message.max} characters.`;
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function getContactSubmissionFingerprint(data: ContactFormData): string {
  return [
    data.name.trim().toLowerCase(),
    data.mobile.trim(),
    data.email.trim().toLowerCase(),
    data.message.trim().toLowerCase(),
  ].join("|");
}
