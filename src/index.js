const express = require('express');
const routes = require("./routes/index.js");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;