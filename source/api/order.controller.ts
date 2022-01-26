import { Request, Response, NextFunction } from "express";
import OrderService from "../service/order.service";
import { Order } from "../model/order";

const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  let order: Order = req.body;
  console.log(`Creating a new order...`);
  OrderService.createOrder(order)
    .then((response) => {
      if (response.status == 200) {
        console.log(`Order created`);
      }
      return res.status(response.status).json(response.data);
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message,
      });
    });
  return res;
};

export default { createOrder };
