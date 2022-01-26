const order = {
  type: "object",
  properties: {
    totalAmount: {
      type: "object",
      properties: {
        amount: {
          type: "string",
          description: "Amount of the order",
          required: true,
          example: "3.00",
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
            description:
              "Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]",
            example: "123458791330",
          },
          quantity: {
            type: "integer",
            description:
              "Global Trade Item Number. One of [UPC, EAN, JAN, ISBN, ITF-14]",
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
          },
        },
      },
    },
    discounts: {
      type: "array",
      items: {
        type: "object",
        properties: {
          amount: {
            type: "object",
            properties: {
              amount: {
                type: "string",
                description: "Amount of the order",
                required: true,
                example: "3.00",
              },
              currency: {
                type: "string",
                description: "Currency type (should be EUR)",
                required: true,
                example: "EUR",
              },
            },
          },
          displayName: {
            type: "string",
            example: "10% Off",
          },
        },
      },
    },
    merchant: {
      type: "object",
      required: true,
      properties: {
        redirectCancelUrl: {
          type: "string",
          description:
            "use -https://portal.staging.scalapay.com/success-url for testing",
          required: true,
          example: "https://portal.staging.scalapay.com/failure-url",
        },
        redirectConfirmUrl: {
          type: "string",
          description:
            "use -https://portal.staging.scalapay.com/failure-url for testing",
          required: true,
          example: "https://portal.staging.scalapay.com/success-url",
        },
      },
    },
    merchantReference: {
      type: "string",
      example: "merchantOrder-1234",
    },
    shippingAmount: {
      type: "object",
      properties: {
        amount: {
          type: "string",
          description: "Amount of the order",
          required: true,
          example: "3.00",
        },
        currency: {
          type: "string",
          description: "Currency type (should be EUR)",
          required: true,
          example: "EUR",
        },
      },
    },
    taxAmount: {
      type: "object",
      properties: {
        amount: {
          type: "string",
          description: "Amount of the order",
          required: true,
          example: "3.00",
        },
        currency: {
          type: "string",
          description: "Currency type (should be EUR)",
          required: true,
          example: "EUR",
        },
      },
    },
    orderExpiryMilliseconds: {
      type: "integer",
      example: 600000,
    },
  },
};
export { order };
