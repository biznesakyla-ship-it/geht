export async function consumeWithTimeout(
  iterator,
  timeoutSeconds,
  delayMs = 100
) {
  const timeoutMs = timeoutSeconds * 1000;
  const startTime = Date.now();

  for (const value of iterator) {
    if (Date.now() - startTime >= timeoutMs) {
      console.log("Time is up");
      break;
    }

    console.log(value);
    await new Promise(resolve => setTimeout(resolve, delayMs));
  }
}
