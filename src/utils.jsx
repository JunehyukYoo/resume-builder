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

export function formatDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();
  const options = { year: "numeric", month: "short" };
  const startDateString = start.toLocaleDateString("en-US", options);
  const endDateString = end.toLocaleDateString("en-US", options);
  if (today > end) {
    const toReturn =
      start.getFullYear() === end.getFullYear()
        ? `${start.toLocaleDateString("en-US", {
            month: "short",
          })} - ${endDateString}`
        : `${startDateString} - ${endDateString}`;
    return toReturn;
  } else {
    return `${startDateString} - Present`;
  }
}
