import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import {
  getContactSubmissionFingerprint,
  type ContactFormData,
} from "@/lib/contactFormValidation";
import { getFirebaseDb } from "@/lib/firebase";

const COLLECTION_NAME = "contactSubmissions";
const DUPLICATE_STORAGE_KEY = "brightcements_contact_last_submission";
const DUPLICATE_WINDOW_MS = 60_000;

type StoredSubmission = {
  fingerprint: string;
  timestamp: number;
};

function readLastSubmission(): StoredSubmission | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = sessionStorage.getItem(DUPLICATE_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as StoredSubmission;
  } catch {
    return null;
  }
}

function writeLastSubmission(fingerprint: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload: StoredSubmission = {
    fingerprint,
    timestamp: Date.now(),
  };

  sessionStorage.setItem(DUPLICATE_STORAGE_KEY, JSON.stringify(payload));
}

export function isDuplicateSubmission(data: ContactFormData): boolean {
  const fingerprint = getContactSubmissionFingerprint(data);
  const lastSubmission = readLastSubmission();

  if (!lastSubmission) {
    return false;
  }

  const isSamePayload = lastSubmission.fingerprint === fingerprint;
  const isWithinWindow =
    Date.now() - lastSubmission.timestamp < DUPLICATE_WINDOW_MS;

  return isSamePayload && isWithinWindow;
}

export class ContactSubmissionError extends Error {
  constructor(
    message: string,
    public readonly code: "duplicate" | "configuration" | "permission" | "network" | "unknown"
  ) {
    super(message);
    this.name = "ContactSubmissionError";
  }
}

function mapFirebaseError(error: unknown): ContactSubmissionError {
  if (error instanceof ContactSubmissionError) {
    return error;
  }

  if (error instanceof Error) {
    if (error.message.includes("Missing Firebase configuration")) {
      return new ContactSubmissionError(
        "The contact form is not configured yet. Please try again later.",
        "configuration"
      );
    }

    const firebaseCode =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      typeof error.code === "string"
        ? error.code
        : null;

    if (firebaseCode === "permission-denied") {
      return new ContactSubmissionError(
        "Unable to submit your message right now. Please try again later.",
        "permission"
      );
    }

    if (
      firebaseCode === "unavailable" ||
      firebaseCode === "deadline-exceeded" ||
      error.message.toLowerCase().includes("network")
    ) {
      return new ContactSubmissionError(
        "Network error. Please check your connection and try again.",
        "network"
      );
    }
  }

  return new ContactSubmissionError(
    "Failed to send your message. Please try again.",
    "unknown"
  );
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  if (isDuplicateSubmission(data)) {
    throw new ContactSubmissionError(
      "This message was already sent. Please wait a moment before submitting again.",
      "duplicate"
    );
  }

  try {
    const db = getFirebaseDb();
    const fingerprint = getContactSubmissionFingerprint(data);

    await addDoc(collection(db, COLLECTION_NAME), {
      name: data.name.trim(),
      mobile: data.mobile.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim(),
      submittedAt: serverTimestamp(),
    });

    writeLastSubmission(fingerprint);
  } catch (error) {
    throw mapFirebaseError(error);
  }
}
