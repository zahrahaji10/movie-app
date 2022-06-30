// import path
const path = require("path");

// controller fn to render home page
const renderHomePage = (req, res) => {
  // get file path
  const filePath = path.join(__dirname, "../../public/main-movies.html");

  // send file
  return res.sendFile(filePath);
};

// export controller functions
module.exports = renderHomePage;
