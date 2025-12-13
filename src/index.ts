require("dotenv").config();
const { connectMongo } = require("../src/services/dbConnection");
const app = require("./app");
const port = process.env.PORT || 4000;

//running app here
(async () => {
  await connectMongo();
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
})();
