import { fetchRetry } from "./exercise";

async function solution(url) {
  const response = await fetch(url);
  return response.json();
}

describe("tests", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should throw a error with 1 retry", () => {
    expect(() => fetchRetry('https://domain-a.com/api-1', 1)).rejects.toThrowError(new Error("Invalid request with 1 retries"));
  });

  it("should call fetch 2 times", () => {
    const spy = jest.spyOn(global, 'fetch')
    expect(() => fetchRetry('https://domain-a.com/api-1', 2)).rejects.toThrowError(new Error("Invalid request with 2 retries"));
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("should call fetch 3 times", () => {
    const spy = jest.spyOn(global, 'fetch')
    expect(() => fetchRetry('https://domain-a.com/api-1', 3)).rejects.toThrowError(new Error("Invalid request with 3 retries"));
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it("should return the data in json format", async () => {
    const usersOriginal = await solution('https://jsonplaceholder.typicode.com/users');
    const users = await fetchRetry('https://jsonplaceholder.typicode.com/users', 1);
    expect(users).toEqual(usersOriginal);
  });
});
