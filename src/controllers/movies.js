// import path
const path = require("path");

// controller fn to render home page
const renderMoviePage = (req, res) => {
  // get file path
  const filePath = path.join(__dirname, "../../dist/movies-page.html");

  // send file
  return res.sendFile(filePath);
};
