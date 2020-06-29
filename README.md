# Moxy

Module proxying utilities for Deno.

## Module Proxies

### Random

Flips a coin to import the URL encoded module on either the `heads` or `tails` query-string parameter.

```console
deno run --allow-net "https://raw.githubusercontent.com/asos-craigmorten/moxy/main/lib/random.ts?heads=./random.ts&tails=./random.ts"
```
