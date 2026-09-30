/** Join class names, skipping falsy values. A tiny local `clsx`. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Build a `mailto:` URL with an encoded subject and body. */
export function buildMailto(email: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${email}?${params.toString()}`;
}
