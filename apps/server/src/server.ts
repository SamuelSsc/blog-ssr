import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../web/src/App";

const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Servidor rodando corretamente! 🚀");
});

app.use(express.static(path.resolve(__dirname, "../../web/dist")));

app.get("*", (req, res) => {
    const html = renderToString(React.createElement(App));
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head><title>SSR Blog</title></head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/bundle.js"></script>
      </body>
      </html>
    `);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
