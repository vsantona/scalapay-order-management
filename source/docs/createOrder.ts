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
          $ref: "#/components/schemas/order",
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
            $ref: "#/components/schemas/checkoutInfo",
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

export { createOrder };
