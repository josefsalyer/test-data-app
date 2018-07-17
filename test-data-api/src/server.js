const Hapi = require("hapi");
const server = new Hapi.Server({
  host: "0.0.0.0",
  port: Number(process.argv[2] || 3002)
});

server.route({
  method: "GET",
  path: "/",
  handler: function(req, h) {
    return "Hello Test Data API";
  }
});

async function startServer() {
  await server.start(); // boots your server
  console.log("Now Visit: http://localhost:" + server.info.port);
}

startServer();
