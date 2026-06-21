"use client";

import { useRef, useState, type ChangeEvent } from "react";

import {
  hasValidationErrors,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
  type ContactFormField,
} from "@/lib/contactFormValidation";
import { submitContactForm } from "@/lib/submitContactForm";

const initialFormData: ContactFormData = {
  name: "",
  mobile: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isSubmittingRef = useRef(false);

  const clearFieldError = (field: ContactFormField) => {
    setFieldErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as ContactFormField;

    setFormData((prev) => ({ ...prev, [field]: value }));
    clearFieldError(field);
    setFormError(null);
    setIsSuccess(false);
  };

  const handleSubmit = async () => {
    if (isSubmittingRef.current) {
      return;
    }

    const errors = validateContactForm(formData);
    setFieldErrors(errors);
    setFormError(null);
    setIsSuccess(false);

    if (hasValidationErrors(errors)) {
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setFormData(initialFormData);
      setFieldErrors({});
      setIsSuccess(true);
    } catch (error) {
      setIsSuccess(false);
      setFormError(
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again."
      );
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 bg-white rounded-xl shadow-md mt-11 px-6 py-12">
      <h2 className="text-[#5D187E] text-2xl md:text-3xl font-bold mb-8">
        Contact us
      </h2>
      {isSuccess ? (
        <p
          className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
          role="status"
          aria-live="polite"
        >
          Thank you for contacting us! We will get back to you soon.
        </p>
      ) : null}
      {formError ? (
        <p
          className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
          role="alert"
          aria-live="assertive"
        >
          {formError}
        </p>
      ) : null}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-800 font-medium mb-2 text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[#5D187E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D187E] focus:border-transparent text-gray-800"
              placeholder="Your name"
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
            {fieldErrors.name ? (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.name}
              </p>
            ) : null}
          </div>
          <div className="flex-1">
            <label className="block text-gray-800 font-medium mb-2 text-base">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[#5D187E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D187E] focus:border-transparent text-gray-800"
              placeholder="Your mobile"
              aria-invalid={Boolean(fieldErrors.mobile)}
              aria-describedby={fieldErrors.mobile ? "mobile-error" : undefined}
            />
            {fieldErrors.mobile ? (
              <p id="mobile-error" className="mt-1 text-sm text-red-600">
                {fieldErrors.mobile}
              </p>
            ) : null}
          </div>
        </div>
        <div>
          <label className="block text-gray-800 font-medium mb-2 text-base">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-[#5D187E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D187E] focus:border-transparent text-gray-800"
            placeholder="Your email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-800 font-medium mb-2 text-base">
            Message
          </label>
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-[#5D187E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D187E] focus:border-transparent resize-none text-gray-800"
            placeholder="Your message"
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
          />
          {fieldErrors.message ? (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`bg-[#5D187E] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#4a1463] cursor-pointer"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
