type PhoneNumber = [string, string, string, string] | null;

const regex = /^(\+\d+)?\W*(\d{3})\W*(\d{3})\W*(\d{4})/;

const parseNumber: (s: string) => PhoneNumber = (userInput: string) => {
  const matches = userInput.match(regex);

  if (!matches) return null;

  return [matches[1] || "+1", matches[2], matches[3], matches[4]];
};

const formatNumberForAuth: (n: PhoneNumber) => string | null = (
  n: PhoneNumber
) => (!n ? null : `${n[0]} (${n[1]}) ${n[2]}-${n[3]}`);

export const parseAndFormatPhoneNumber = (userInput: string) =>
  formatNumberForAuth(parseNumber(userInput));

export const parseAndCompressNumber = (input: string) =>
  parseNumber(input)?.join("");
