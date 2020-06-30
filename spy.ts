const { url } = import.meta;

import { moxy } from "./moxy.ts";
import { spy } from "https://deno.land/x/mock/spy.ts";

const getModuleUrl = () => {
  const params = new URL(url).searchParams;
  const m = params.get("m");

  if (!m) {
    throw new Error("missing m querystring param");
  }

  return m;
};

const createMockModule = (nodule: any) =>
  Object.entries(nodule).reduce((watchedNodule, [prop, value]) => ({
    ...watchedNodule,
    [prop]: typeof value === "function" ? spy(value) : value,
  }), {});

moxy(getModuleUrl, createMockModule);
