const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://cfw-suc.caraga-apps.com",
    changeOrigin: true,
    pathRewrite: {
      "^/": "/", // optional if you're not adding a base path
    },
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy server running on port 3000");
});
