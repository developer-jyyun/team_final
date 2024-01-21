const https = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const PORT = 3000;
const hostname = "local.winnerone.site";
const app = next({ dev, hostname, PORT });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync("local.key.pem", "utf8"),
  cert: fs.readFileSync("local.cert.pem", "utf8"),
};

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${PORT}`);
    });
});
