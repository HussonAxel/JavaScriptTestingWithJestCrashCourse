const {
  sum,
  myFunction,
  fetchData,
  fetchDataPromise,
  fetchFailedDataPromise,
  fetchDataAsync,
} = require("./sum");



// Possibilité d'utiliser describe pour regrouper les tests
// Possibilité d'utiliser afterEach, AfterAll, beforeEach, beforeAll pour faire des actions avant ou après les tests
// Possibilité d'utiliser it à la place de test 
// Possibilité d'utiliser test.concurrent pour faire des tests en parallèle
// Possibilité d'utiliser only ou skip pour faire des tests spécifiques ou sauter des tests


describe("Given the file sum.js", () => {
  // Basic Arithmetic Tests
  describe("Basic Arithmetic Functions", () => {
    // Test for sum function with positive numbers
    test("should correctly add two positive numbers", () => {
      expect(sum(1, 2)).toBe(3);
    });

    // Test for simple addition
    test("should correctly add 2 and 2", () => {
      expect(2 + 2).toBe(4);
    });

    // Test to validate non-equality
    test("should verify that adding 2 and 3 does not equal 4", () => {
      expect(2 + 3).not.toBe(4);
    });
  });

  // Tests for Async/Await, Promises, and Callbacks
  describe("Async/Await, Promises, and Callbacks", () => {
    // Test for callback function
    test("should correctly handle a callback function", (done) => {
      function callback(data) {
        try {
          expect(data).toBe("There is a callback function");
          done();
        } catch (error) {
          done(error);
        }
      }
      fetchData(callback);
    });

    // Test for promise function
    test("should resolve with correct data from a promise", () => {
      return expect(fetchDataPromise()).resolves.toBe(
        "There is a promise function"
      );
    });

    // Test for rejected promise
    test("should handle a rejected promise correctly", () => {
      return expect(fetchFailedDataPromise()).rejects.toEqual(
        "There is a failed promise"
      );
    });

    // Test for async function
    test("should retrieve correct data from an async function", async () => {
      const data = await fetchDataAsync();
      expect(data).toBe("There is a async function");
    });
  });

  // Tests for Mocks and Spies
  describe("Testing with Mocks and Spies", () => {
    // Mock implementation test
    test("should correctly mock a basic function", () => {
      const mock = jest.fn((x) => 42 + x);
      expect(mock(1)).toBe(43);
      expect(mock(0.5)).toBe(42.5);
      expect(mock(2)).toBe(44);
      expect(mock).toHaveBeenCalledWith(2); // check if called with 2
      expect(mock).toHaveBeenCalledTimes(3); // check if called 3 times
    });

    // Spying on a method
    test("should correctly spy on a method of an object", () => {
      const video = {
        play() {
          return true;
        },
      };
      const spy = jest.spyOn(video, "play");
      video.play();
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  // Tests for Other Cases
  describe("Miscellaneous Tests", () => {
    // Test for object assignment
    test("should correctly assign object properties", () => {
      const data = { one: 1 };
      data["two"] = 2;
      expect(data).toEqual({ one: 1, two: 2 });
    });

    // Test for null values
    test("should correctly evaluate null as falsy", () => {
      const n = null;
      expect(n).toBeFalsy();
    });

    // Test for zero values
    test("should correctly evaluate 0 as not truthy", () => {
      const z = 0;
      expect(z).not.toBeTruthy();
    });

    // Test for error throwing on invalid input
    test("should throw an error for invalid input", () => {
      expect(() => {
        myFunction("3");
      }).toThrow();
    });
  });
});
