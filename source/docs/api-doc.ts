const requestBody = {
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
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          gtin: {
            type: "string",
            description: "Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]",
            example: "123458791330",
          },
          quantity: {
            type: "integer",
            description: "Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]",
            required: true,
            example: 1,
          },
          price: {
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
          name: {
            type: "string",
            required: true,
            example: "T-Shirt",
          },
          category: {
            type: "string",
            required: true,
            example: "clothes",
          }
        }
      },
    },
    orderExpiryMilliseconds: {
      type: "integer",
      example: 600000
    }
  }
};

const responseBody = {
  type: "object",
  properties: {
    token: {
      type: "string",
      description: "Scalapay order unique token"
    },
    expires: {
      type: "string",
      format: "date-time",
      description: "Date and time of the order to expire in ISO 8601 format"
    },
    checkoutUrl: {
      type: "string",
      description: "Redirect Url to the Scalapay checkout"
    }
  },
};

const createOrder = {
  tags: ["Orders"],
  description: "Create an order",
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
          $ref: "#/components/schemas/requestBody",
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
            $ref: "#/components/schemas/responseBody",
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
    orders: {
      post: createOrder,
    },
  },
  components: {
    schemas: {
      order: requestBody,
      checkoutInfo: responseBody
    },
  },
};
