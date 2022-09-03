import { fetchRetry } from "./exercise";

describe("tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should throw a error with 1 retry", () => {
    jest.spyOn(global, "fetch").mockRejectedValue("error");
    expect(() =>
      fetchRetry("https://domain-a.com/api-1", 1)
    ).rejects.toThrowError(new Error("Invalid request with 1 retries"));
    expect(() =>
      fetchRetry("https://domain-a.com/api-1", 2)
    ).rejects.toThrowError(new Error("Invalid request with 2 retries"));
    expect(() =>
      fetchRetry("https://domain-a.com/api-1", 3)
    ).rejects.toThrowError(new Error("Invalid request with 3 retries"));
  });

  it("should call fetch 2 times", async () => {
    const spy = jest.spyOn(global, "fetch").mockRejectedValue("error");
    try {
      await fetchRetry("https://domain-a.com/api-1", 2);
    } catch {
      expect(spy).toHaveBeenCalledTimes(2);
    }

  });

  it("should call fetch 3 times", async () => {
    const spy = jest.spyOn(global, "fetch").mockRejectedValue("error");
    try {
      await fetchRetry("https://domain-a.com/api-1", 3);
    } catch {
      expect(spy).toHaveBeenCalledTimes(3);
    }
  });

  it("should return the data in json format", async () => {
    const spy = jest
      .spyOn(global, "fetch")
      .mockResolvedValue({ json: () => Promise.resolve([1, 2, 3, 4]) });
    const users = await fetchRetry(
      "https://jsonplaceholder.typicode.com/users",
      1
    );
    expect(users).toEqual([1, 2, 3, 4]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
