"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMap } from "@/components/contact/ContactMap";
import { Container } from "@/components/ui/Container";

export function ContactPageContent() {
  return (
    <div className="min-h-screen bg-[#FEF8ED]">
      <Container className="py-4 md:py-6 lg:py-8">
        <h1 className="text-[#5D187E] text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Contact us
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white rounded-xl shadow-md px-6 py-12 mt-8">
          <ContactInfo />
          <ContactMap />
        </div>
        <ContactForm />
      </Container>
    </div>
  );
}
