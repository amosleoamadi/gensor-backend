const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Auth API",
      version: "1.0.0",
      description: "Authentication API Documentation",
    },

    servers: [
      {
        url:
          process.env.BASE_URL ||
          `http://localhost:${process.env.PORT || 5000}`,
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: [path.join(__dirname, "./routes/*.js")],
};

module.exports = swaggerJsDoc(options);
