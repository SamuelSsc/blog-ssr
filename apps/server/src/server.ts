import express from "express";

const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Servidor rodando corretamente! 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
