const checkoutInfo = {
  type: "object",
  properties: {
    token: {
      type: "string",
      description: "Scalapay order unique token",
    },
    expires: {
      type: "string",
      format: "date-time",
      description: "Date and time of the order to expire in ISO 8601 format",
    },
    checkoutUrl: {
      type: "string",
      description: "Redirect Url to the Scalapay checkout",
    },
  },
};

export { checkoutInfo };
