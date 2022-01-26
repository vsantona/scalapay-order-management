/** source/server.ts */
import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./api/order.route";

const swaggerUi = require("swagger-ui-express");
const openApiDocumentation = require("./docs/api-doc");

const app: Express = express();

/** Logging */
app.use(morgan("dev"));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

/** RULES OF OUR API */
app.use((req, res, next) => {
  next();
});

/** Routes */
app.use("/", routes);

/** Error handling */
app.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

/** Server */
const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);

export default app;
