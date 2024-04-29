const swaggerJsDoc = require("swagger-jsdoc");

module.exports = function (port) {
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Mobitech Swagger API",
        version: "1.0.0",
        description: "Mobitech Swagger API",
      },
      servers: [
        {
          url: `http://localhost:${port}`,
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

  return swaggerJsDoc(swaggerOptions);
};
