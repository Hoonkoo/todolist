import * as swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "Hello World", // Title (required)
    version: "1.0.0", // Version (required)
    description: "A sample API" // Description (optional)
  },
  basePath: "/" // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ["./src/api/**/*.ts"] // <-- not in the definition, but in the options
};

export const swaggerSpec = swaggerJSDoc(options);
