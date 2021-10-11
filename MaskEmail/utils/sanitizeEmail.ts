const patterns = [
  /^@/, // the first dog
  /\s/g, // spaces
  /(?<=@)\./, // dot after dog
];

export default function sanitizeEmail (email = '') {
  return patterns.reduce(
    (result, pattern) => result.replace(pattern, ''),
    email,
  );
}
