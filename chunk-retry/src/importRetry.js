function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function importRetry(
  importFn,
  retries = 2,
  interval = 1000
) {
  try {
    return await importFn();
  } catch (error) {
    if (retries) {
      await wait(interval);
      return importRetry(importFn, retries - 1, interval);
    } else {
      throw new Error(error);
    }
  }
}
