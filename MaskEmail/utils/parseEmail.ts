const name = '(?<name>^[^@]+)';
const server = '(?<server>.+)';
const domain = '(?<domain>\\w*$)';

const nameServerDomainPattern = new RegExp(`${name}@${server}\\.${domain}`);
const nameServerPattern = new RegExp(`${name}@${server}`);
const namePattern = new RegExp(name);

const patterns = [
  nameServerDomainPattern,
  nameServerPattern,
  namePattern,
];

type EmailParts = {
  domain?: string | undefined;
  name?: string | undefined;
  server?: string | undefined;
};

function areEmailParts(value: unknown): value is EmailParts {
  return Boolean(value) && typeof value === 'object';
}

export default function parseEmail(email = '') {
  for (const pattern of patterns) {
    const parts = email.match(pattern);
    const groups = parts?.groups;

    if (areEmailParts(groups)) {
      return groups;
    }
  }
}
