"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site, isTodo } from "@/data/site";
import { buildMailto } from "@/lib/utils";

/**
 * Frontend-only contact form.
 *
 * On submit it builds a `mailto:` URL and opens the user's email client — there
 * are NO network requests. To use a hosted form service later (Formspree,
 * Web3Forms, Netlify Forms), replace the `handleSubmit` body with a `fetch`
 * POST to that service's endpoint and keep the same validation and aria-live
 * status handling.
 */

const PROJECT_TYPES = [
  "Website",
  "Web app",
  "Dashboard",
  "API",
  "Custom software",
  "Full-time role",
  "Other",
] as const;

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const emailUnset = isTodo(site.email);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<(typeof PROJECT_TYPES)[number]>("Website");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!emailPattern.test(email)) next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please add a short message.";
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (emailUnset) return;
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("Please fix the highlighted fields.");
      return;
    }
    const subject = `Project enquiry: ${projectType}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`;
    setStatus("Opening your email client…");
    window.location.href = buildMailto(site.email, subject, body);
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-subtle focus:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
        />
        {errors.name ? (
          <p id="cf-name-error" className="mt-1.5 text-xs text-accent">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
        />
        {errors.email ? (
          <p id="cf-email-error" className="mt-1.5 text-xs text-accent">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="cf-type" className="mb-1.5 block text-sm font-medium text-ink">
          Project type
        </label>
        <select
          id="cf-type"
          name="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value as (typeof PROJECT_TYPES)[number])}
          className={inputClass}
        >
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
        />
        {errors.message ? (
          <p id="cf-message-error" className="mt-1.5 text-xs text-accent">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={emailUnset}
        className="bg-gradient-accent group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-accent-ink shadow-soft transition-[transform,box-shadow] duration-300 ease-out-cubic hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        Send message
        <Send
          className="h-4 w-4 transition-transform duration-200 ease-out-cubic group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>

      {emailUnset ? (
        <p className="text-xs text-subtle">
          The contact email is not set yet. Add it to{" "}
          <code className="font-mono">/data/site.ts</code> to enable this form.
        </p>
      ) : null}

      <p role="status" aria-live="polite" className="min-h-[1.25rem] text-xs text-muted">
        {status}
      </p>
    </form>
  );
}
