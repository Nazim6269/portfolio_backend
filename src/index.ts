require("dotenv").config();
const { connectMongo } = require("../src/services/dbConnection");
const app = require("./app");
const port = 3000;

//running app here
(async () => {
  await connectMongo();
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
})();
