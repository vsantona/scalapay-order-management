const createOrder = {
  tags: ["Orders"],
  description: "Create a user",
  operationId: "createOrder",
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/createOrderBody",
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "Order created successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              totalAmount: {
                type: "object",
                required: true,
                properties: {
                  amount: {
                    type: "string",
                    description: "Amount of the order",
                    required: true,
                    example: "190.00",
                  },
                  currency: {
                    type: "string",
                    description: "Currency type (should be EUR)",
                    required: true,
                    example: "EUR",
                  },
                },
              },
              fullName: {
                type: "string",
                example: "John Snow",
              },
              email: {
                type: "string",
                example: "john.snow@email.com",
              },
              password: {
                type: "string",
                example: "442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed",
              },
              enabled: {
                type: "boolean",
                example: true,
              },
              role: {
                type: "string",
                example: "605636683f6e29c81c8b2db0",
              },
              createdAt: {
                type: "string",
                example: "2021-03-20T19:40:59.495Z",
              },
              updatedAt: {
                type: "string",
                example: "2021-03-20T21:23:10.879Z",
              },
            },
          },
        },
      },
    },
    "500": {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};

const createOrderBody = {
  type: "object",
  properties: {
    totalAmount: {
      type: "object",
      required: true,
      properties: {
        amount: {
          type: "string",
          description: "Amount of the order",
          required: true,
          example: "190.00",
        },
        currency: {
          type: "string",
          description: "Currency type (should be EUR)",
          required: true,
          example: "EUR",
        },
      },
    },
    consumer: {
      type: "object",
      required: true,
      properties: {
        phoneNumber: {
          type: "string",
          example: "0400000001",
        },
        givenNames: {
          type: "string",
          description: "First name",
          required: true,
          example: "Joe",
        },
        surname: {
          type: "string",
          description: "Last name",
          required: true,
          example: "Jonas",
        },
        email: {
          type: "string",
          description: "Consumer email",
          example: "joe.jonas@gg.com",
        },
      },
    },
    billing: {
      type: "object",
      properties: {
        phoneNumber: {
          type: "string",
          example: "0400000001",
        },
        countryCode: {
          type: "string",
          example: "IT",
        },
        name: {
          type: "string",
          example: "Joe Consumer",
        },
        postcode: {
          type: "string",
          example: "50056",
        },
        suburb: {
          type: "string",
          example: "Montelupo Fiorentino",
        },
        line1: {
          type: "string",
          example: "Via della Rosa, 58",
        },
      },
    },
    shipping: {
      type: "object",
      properties: {
        phoneNumber: {
          type: "string",
          example: "0400000001",
        },
        countryCode: {
          type: "string",
          example: "IT",
        },
        name: {
          type: "string",
          example: "Joe Consumer",
        },
        postcode: {
          type: "string",
          example: "50056",
        },
        suburb: {
          type: "string",
          example: "Montelupo Fiorentino",
        },
        line1: {
          type: "string",
          example: "Via della Rosa, 58",
        },
      },
    },
  },
};

module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Order Management Tool",
    description: "API to add a new order to the Scalapay portal",
    contact: {
      name: "Vincenzo Santonastaso",
      url: "https://github.com/vincenzoSantonastasoGithub/OrderManagementTool",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://localhost:6060/",
      description: "Local Server",
    },
  ],
  tags: [
    {
      name: "Orders",
    },
  ],
  paths: {
    users: {
      post: createOrder,
    },
  },
  components: {
    schemas: {
      createOrderBody,
    },
  },
};
