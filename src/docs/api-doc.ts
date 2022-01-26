import { order } from "./order";
import { checkoutInfo } from "./checkoutInfo";
import { createOrder } from "./createOrder";

module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Order Management Tool",
    description: "API to add a new order into the Scalapay portal",
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
    {
      url: "https://ordermanagementtool.herokuapp.com/",
      description: "Remote Server",
    },
  ],
  tags: [
    {
      name: "Orders",
    },
  ],
  paths: {
    "/orders": {
      post: createOrder,
    },
  },
  components: {
    schemas: {
      order: order,
      checkoutInfo: checkoutInfo,
    },
  },
};
