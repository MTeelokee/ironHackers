const chalk = require("chalk");
const http = require("http");
const fs = require("fs");
const axios = require("axios");
const port = 8000;
const host = "localhost";

const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end("<h1>My first server</h1>");
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

fs.writeFile("noodles.txt", "I like noodles", { encoding: "utf-8" }, () => {
  console.log("data created");
});

fs.readFile("./noodles.txt", "utf-8", (err, data) => {
    if(err) throw err
  console.log(data);
});

axios
  .get("https://www.google.com/")
  .then((response) => {
    fs.writeFile("res.txt", response.data, (err) => {
      console.log(response);
    });
  })
  .catch((err) => console.log(err));



console.log(chalk.blue("HichT"));
console.log(chalk.yellow("Elyes"));
console.log(chalk.red("Vahitu"));
console.log(chalk.white("Agash"));

