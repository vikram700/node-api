import http from "http";

const port = process.env.PORT || 3000;

const httpServer = new http.createServer(async (req, res) => {
  console.log("Got the request");
  res.statusCode = 200;
  res.end(JSON.stringify(req.headers));
});

httpServer.listen(port, () => {
  console.log("started listening the server on port: ", port);
});
