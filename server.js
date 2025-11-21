const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>${"YOUR FULL NAME"}</h1>
    <h2>Section: ${"YOUR SECTION"}</h2>
    <p>"${"YOUR INSPIRATIONAL QUOTE"}"</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
