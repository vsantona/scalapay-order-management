import { Order } from "../model/order";
import axios from "axios";

const authToken = "qhtfs87hjnc12kkos";
export const BASE_URL = "https://staging.api.scalapay.com/v2";

export const createOrder = async (order: Order): Promise<any> => {
  return await axios
    .post(`${BASE_URL}/orders`, order, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      console.log(err);
      return { status: 500, data: { message: err.message } };
    });
};

export default { createOrder };
