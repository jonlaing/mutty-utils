import * as R from "ramda";
import { functions as Fn } from "shonad/base";
import { maybe } from "shonad/data";

type PhoneNumber = [string, string, string, string];

const regex = /^(\+\d+)?\W*(\d{3})\W*(\d{3})\W*(\d{4})/;

const parse = (userInput: string): maybe.Maybe<PhoneNumber> => {
  const matches = userInput.match(regex);

  if (!matches) return maybe.nothing();

  return maybe.just([matches[1] || "+1", matches[2], matches[3], matches[4]]);
};

const formatForAuth = (n: PhoneNumber): string =>
  `${n[0]} (${n[1]}) ${n[2]}-${n[3]}`;

export const parseAndFormat = (userInput: string) =>
  maybe.fmap(formatForAuth, parse(userInput));

export const parseAndCompress = (input: string) =>
  maybe.fmap<Fn.Function<PhoneNumber, string>>(R.join(""), parse(input));
