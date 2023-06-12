const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
