const express = require("express");

const routes = require("./routes");

// declare the PORT
const PORT = process.env.PORT || 4000;

// create my express app instance
const app = express();

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
