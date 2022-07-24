export function toBePowerOf(received: any, power: number) {
  if (typeof power !== "number") {
    throw new Error("expected power to be a number");
  }

  if (typeof received !== "number") {
    throw new Error("expected value to be a number");
  }

  let receivedCopy = received;
  while (receivedCopy % power === 0) receivedCopy = receivedCopy / power;

  return receivedCopy === 1
    ? {
        message: () => `Expected ${received} not to be a power of ${power}`,
        pass: true,
      }
    : {
        message: () => `Expected ${received} to be a power of ${power}`,
        pass: false,
      };
}
