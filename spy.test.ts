Deno.test("it should spy on every function export of the target module", async () => {
  const nodule = await import(
    "https://raw.githubusercontent.com/asos-craigmorten/moxy/main/spya.ts\?m\=https%3A%2F%2Fraw.githubusercontent.com%2Fasos-craigmorten%2Fopine%2Fmain%2Fmod.ts"
  );

  console.log("asd", nodule);
});
