/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import OrderService from "../service/order.service";
import { Order } from "../model/order";

const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  let order: Order = req.body;
  OrderService.createOrder(order)
    .then((response) => {
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
