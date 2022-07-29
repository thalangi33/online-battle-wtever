import { toBePowerOf } from "./to-be-power-of";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBePowerOf(power: number): CustomMatcherResult;
    }
  }
}

expect.extend({ toBePowerOf });
