/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function sum(a, b) {
  return a + b;
}

/**
 * This function checks if the input is a number.
 * @param {number} input - The input to be checked.
 * @throws {Error} - Throws an error if the input is not a number.
 */
function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Input is not a number");
  }
}

/**
 * Fetches data asynchronously and invokes a callback function with the result.
 * @param {Function} callback - The callback function to be invoked with the fetched data.
 */
function fetchData(callback) {
    setTimeout(() => {
        callback("There is a callback function");
    });
}

/**
 * Fetches data using a promise.
 * @returns {Promise<string>} A promise that resolves to a string.
 */
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("There is a promise function");
    });
  });
}

/**
 * Fetches failed data as a promise.
 * @returns {Promise} A promise that rejects with an error message.
 */
function fetchFailedDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("There is a failed promise");
    });
  });
}

/**
 * Fetches data asynchronously.
 * @returns {Promise<string>} A promise that resolves to a string.
 */
function fetchDataAsync () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("There is a async function")
        })
    })
}




module.exports = {
  sum,
  myFunction,
  fetchData,
  fetchDataPromise,
  fetchFailedDataPromise,
  fetchDataAsync,
};
