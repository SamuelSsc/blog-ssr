// import express from "express";
// import path from "path";
// import { renderToString } from "react-dom/server";
// import App from "../../web/src/App"
// import React from "react";

// const app = express();

// // Servir arquivos estáticos do React
// app.use(express.static(path.resolve(__dirname, "../../web/dist")));

// // Rota SSR
// app.get("*", (req, res) => {
//   const html = renderToString(React.createElement(App));
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head><title>SSR Blog</title></head>
//     <body>
//       <div id="root">${html}</div>
//       <script src="/static/bundle.js"></script>
//     </body>
//     </html>
//   `);
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));