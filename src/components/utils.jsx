export function formatPhoneNumber(input) {
  const str = String(input);
  const digits = str.replace(/\D/g, "");
  const match = digits.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const [, area, prefix, line] = match;
    return `(${area}) ${prefix}-${line}`;
  }
  return str;
}
