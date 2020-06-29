const { url } = import.meta;

import { moxy } from "./moxy.ts";

const getModuleUrl = () => {
  const params = new URL(url).searchParams;
  const m = params.get("m");

  if (!m) {
    throw new Error("missing m querystring param");
  }

  return m;
};

const createMockModule = (nodule: any) => {
  console.log(nodule);

  return nodule;
};

export const mock = moxy(getModuleUrl, createMockModule);
