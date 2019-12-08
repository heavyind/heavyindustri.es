const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { createBundleRenderer } = require("vue-server-renderer");

const isProduction = process.env.NODE_ENV === "production";
const clientManifest = require("./dist/client-manifest.json");
const serverBundlePath = path.resolve(__dirname, "dist/app.server.json");
const skeletonPath = path.resolve(__dirname, "./src/skeleton.html");
const server = express();
const settings = require("./src/settings.cjs");


server.use(express.static("./public"));
server.use(express.static("./dist"));
server.use(bodyParser.json());
server.use(cookieParser());


server.post("/options/language", (req, res) => {
  console.log("A post came in. Language:", req.body.language);
  if (req.body && req.body.language) {
    res.cookie("language", req.body.language).send("201");
  }
});

server.get("*", (req, res) => {

  const renderer = createBundleRenderer(serverBundlePath, {
    runInNewContext: false,
    template: require("fs").readFileSync(skeletonPath, "utf-8"),
    clientManifest
  });

  const context = { 
    url: req.url,
    title: settings.pageMeta[req.url]["title"],
    metaDescription: settings.pageMeta[req.url]["metaDescription"],
    cookies: req.cookies
  };

  renderer.renderToString(context, (err, html) => {
    if (!isProduction) {
      console.log(err);
    }
    res.end(html);
  });
});


server.listen(process.argv[2] || 8080);
