const http = require("http");
const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello, world");
});

// Qusetion 01
function sum(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
  return sum;
}

// Question 02
function printSquare() {
  const nums = [10, 16, 25, 100, 23];
  nums.forEach((n) => {
    console.log(n * n);
  });
}

// Question 03
function findMAx() {
  const nums = [10, 16, 25, 100, 23];
  console.log(Math.max(...nums));
}

// Question 04
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Question 05
function readNameAge() {
  fs.readFile("data.json", (e, data) => {
    if (e) {
      console.error("Error", e);
      return;
    }
    try {
      const jsonData = JSON.parse(data.toString());
      const name = jsonData.name;
      const age = jsonData.age;
      console.log(`Name: ${name}`);
      console.log(`age ${age}`);
    } catch (e) {
      console.error("Error", e);
    }
  });
}

// Question 06
function reverseString(s) {
  const arr = s.split("");
  arr.reverse();
  const result = arr.join("");

  console.log(result);
}

// Question 07
function readCSV() {
  const results = [];
  fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.table(results);
    });
}

// Question 08
function fetchFromAPI() {
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  axios
    .get(apiURL)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.error("Error", e.message);
    });
}

// sum(10, 20);
// printSquare();
// findMAx();
// console.log(factorial(5));
// readNameAge();
// reverseString("hello");
// readCSV();
// fetchFromAPI();

const port = 8080;
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

// GITHUB REPO: https://github.com/itsvishwa/SCS_2208_Labsheet_07.git
