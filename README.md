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
