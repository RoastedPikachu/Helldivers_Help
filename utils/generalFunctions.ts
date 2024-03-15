import { Quote } from "@/utils/generalInterfaces";

export function getRandomQuote(quotes: Quote[], currentQuote: Quote): Quote {
  let nextQuote = quotes[Math.floor(Math.random() * quotes.length)];

  while (nextQuote.id === currentQuote.id) {
    nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }

  return nextQuote;
}
