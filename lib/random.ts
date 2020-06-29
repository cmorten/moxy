import { moxy } from "./moxy.ts";

export const random = moxy(({ url }: { url: string }) => {
  const params = new URL(url).searchParams;

  const heads = params.get("heads");
  const tails = params.get("tails");

  if (!heads) {
    throw new Error("missing head querystring param");
  } else if (!tails) {
    throw new Error("missing head querystring param");
  }

  const toss = Math.random() > 0.5 ? heads : tails;

  return toss;
});
