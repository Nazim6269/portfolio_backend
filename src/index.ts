require("dotenv").config();
const { connectMongo } = require("../src/services/dbConnection");
const app = require("./app");
const PORT = process.env.PORT || 4000;

//running app here

app.listen(PORT, async () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  await connectMongo();
});
