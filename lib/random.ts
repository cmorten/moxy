const { url } = import.meta;

import { moxy } from "./moxy.ts";

export const random = moxy(() => {
  const params = new URL(url).searchParams;

  console.log(url);
  console.log(Object.fromEntries(params.entries()));

  const heads = params.get("heads");
  const tails = params.get("tails");

  if (!heads) {
    throw new Error("missing heads querystring param");
  } else if (!tails) {
    throw new Error("missing tails querystring param");
  }

  const toss = Math.random() > 0.5 ? heads : tails;

  return toss;
});
