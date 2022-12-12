const patterns = [
  /^@/, // The first dog
  /\s/g, // Spaces
  /(?<=@)\./, // Dot after dog
];

export default function sanitizeEmail(email = '') {
  return patterns.reduce(
    (result, pattern) => result.replace(pattern, ''),
    email,
  );
}
