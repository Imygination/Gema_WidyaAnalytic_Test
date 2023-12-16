if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const router = require("./routers");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(router);

app.get("/", (req, res) => {
  res.send("Server Gema - Test Widya Analytic");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Gema Running - Test Widya Analytic ${port}`);
});
