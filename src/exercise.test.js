import { runCode } from "./exercise";

describe("tests", () => {
  it("should return [1,2,3,4]", () => {
    const arrayA = [1, 2];
    const arrayB = [3, 4];
    const rta = runCode(arrayA, arrayB);
    expect(rta).toEqual([1, 2, 3, 4]);
  });

  it("should return [1,2,3,4,5]", () => {
    const arrayA = [1, 2];
    const arrayB = [3, 4, 5];
    const rta = runCode(arrayA, arrayB);
    expect(rta).toEqual([1, 2, 3, 4, 5]);
  });
});
