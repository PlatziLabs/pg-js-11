import * as exercise from "./exercise";
import { fetchRetry } from "./exercise";

async function solution(url) {
  const response = await fetch(url);
  return response.json();
}

describe("tests", () => {

  it("should throw a error with 2 retries", () => {
    const spy = jest.spyOn(exercise, 'fetchRetry')
    expect(() => exercise.fetchRetry('https://domain-a.com/api-1', 2)).rejects.toThrowError(new Error("Invalid request with 1 retries"));
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("should throw a error with 1 retries", () => {
    expect(() => fetchRetry('https://domain-a.com/api-1', 1)).rejects.toThrowError(new Error("Invalid request with 2 retries"));
  });

  it("should return the data in json format", async () => {
    const usersOriginal = await solution('https://jsonplaceholder.typicode.com/users');
    const users = await fetchRetry('https://jsonplaceholder.typicode.com/users', 1);
    expect(users).toEqual(usersOriginal);
  });
});
