const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["*"],
  }),
);
app.use("/api/users", require("./routes/user.route"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
