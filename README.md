# Moxy

Module proxying utilities for Deno.

## Module Proxies

### Noop

A module that does nothing.

```console
deno run "https://raw.githubusercontent.com/asos-craigmorten/moxy/main/lib/noop.ts"
```

### Echo Meta

A module that logs the `import.meta` object.

```console
deno run "https://raw.githubusercontent.com/asos-craigmorten/moxy/main/lib/echoMeta.ts"
```

### Random

Flips a coin to import the URL encoded module on either the `heads` or `tails` query-string parameter.

```console
deno run --allow-net "https://raw.githubusercontent.com/asos-craigmorten/moxy/main/lib/random.ts?heads=./noop.ts&tails=./echoMeta.ts"
```

In this example there is a 50% chance that the `noop.ts` module is imported and a 50% chance that the `echoMeta.ts` module is imported.

### Spy

Wraps every function export of the provided module in a spy.

```ts
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
```
