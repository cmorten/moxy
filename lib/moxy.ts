/**
 * Maps `import.meta` using the provided function
 * and attempts to import the result.
 * 
 * @param {Function} fn  
 */
export const moxy = async (fn: Function) => await import(fn());
