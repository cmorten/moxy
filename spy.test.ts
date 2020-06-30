import { expect } from "https://deno.land/x/expect@285caf/mod.ts";
import { superdeno } from "https://deno.land/x/superdeno@1.5.0/mod.ts";

Deno.test(
  "it should spy on every function export of the target module",
  async () => {
    /**
     * We import the moxy spy module with our target module set to the `m`
     * query-string parameter.
     */
    const nodule = await import(
      `https://deno.land/x/gh:asos-craigmorten:moxy@main/spy.ts?m=${encodeURIComponent(
        "https://deno.land/x/opine@main/mod.ts"
      )}`
    );

    /**
     * We can now get our target module exports through a slightly adapted
     * async `.default()` API.
     */
    const { opine } = await nodule.default();

    /**
     * Our import works as it would normally.
     */
    const app = opine();

    app.get("/", (req: any, res: any) => {
      res.send("Hello Deno!");
    });

    await superdeno(app).get("/").expect("Hello Deno!");

    /**
     * But we can see here that we have actually been spying on it!
     */
    expect(opine.calls[0].args).toEqual([]);
    expect(opine.calls[0].returned).toEqual(app);
  }
);
