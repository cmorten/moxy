export const moxy = async (
  fn: Function,
  gn: Function = (nodule: any) => nodule,
) => await gn(await import(await fn()));
