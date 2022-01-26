import mockAxios from "jest-mock-axios";
import request from "supertest";
import app from "../../server";
import { BASE_URL } from "../../service/order.service";

jest.mock("axios");

describe("orders", () => {
  afterEach(() => {
    mockAxios.reset();
  });
  let requestBody = {
    totalAmount: { amount: "190.00", currency: "EUR" },
    consumer: {
      phoneNumber: "0400000001",
      givenNames: "Joe",
      surname: "Consumer",
      email: "test@scalapay.com",
    },
    billing: {
      name: "Joe Consumer",
      line1: "Via della Rosa, 58",
      suburb: "Montelupo Fiorentino",
      postcode: "50056",
      countryCode: "IT",
      phoneNumber: "0400000000",
    },
    shipping: {
      name: "Joe Consumer",
      line1: "Via della Rosa, 58",
      suburb: "Montelupo Fiorentino",
      postcode: "50056",
      countryCode: "IT",
      phoneNumber: "0400000000",
    },
    items: [
      {
        name: "T-Shirt",
        category: "clothes",
        subcategory: ["shirt", "long-sleeve"],
        brand: "TopChoice",
        gtin: "123458791330",
        sku: "12341234",
        quantity: 1,
        price: { amount: "10.00", currency: "EUR" },
      },
      {
        name: "Jeans",
        category: "clothes",
        subcategory: ["pants", "jeans"],
        brand: "TopChoice",
        gtin: "123458722222",
        sku: "12341235",
        quantity: 1,
        price: { amount: "20.00", currency: "EUR" },
      },
    ],
    discounts: [
      {
        displayName: "10% Off",
        amount: { amount: "3.00", currency: "EUR" },
      },
    ],
    merchant: {
      redirectConfirmUrl: "https://portal.staging.scalapay.com/success-url",
      redirectCancelUrl: "https://portal.staging.scalapay.com/failure-url",
    },
    merchantReference: "merchantOrder-1234",
    taxAmount: { amount: "3.70", currency: "EUR" },
    shippingAmount: { amount: "10.00", currency: "EUR" },
    orderExpiryMilliseconds: 600000,
  };
  test("given a valid order when invoking /createOrder API then return checkout info", async () => {
    let response = {
      status: 200,
      data: {
        token: "11KYRIVVVS",
        expires: "2022-01-23T17:26:28.840Z",
        checkoutUrl: "https://portal.staging.scalapay.com/checkout/11KYRIVVVS",
      },
    };
    mockAxios.post.mockResolvedValueOnce(response);

    const actual = await request(app).post("/orders").send(requestBody);

    expect(mockAxios.post).toHaveBeenCalledWith(
      `${BASE_URL}/orders`,
      requestBody,
      { headers: { Authorization: "Bearer qhtfs87hjnc12kkos" } }
    );
    expect(actual.statusCode).toEqual(200);
    expect(actual.body.checkoutUrl).toEqual(response.data.checkoutUrl);
    expect(actual.body.expires).toEqual(response.data.expires);
    expect(actual.body.token).toEqual(response.data.token);
  });

  test("given a generic error occurs invoking external API when invoking /createOrder API then return internal server error with related error ", async () => {
    mockAxios.post.mockRejectedValueOnce(new Error("Network Error"));

    const actual = await request(app).post("/orders").send(requestBody);

    expect(mockAxios.post).toHaveBeenCalledWith(
      `${BASE_URL}/orders`,
      requestBody,
      { headers: { Authorization: "Bearer qhtfs87hjnc12kkos" } }
    );
    expect(actual.statusCode).toEqual(500);
    expect(actual.body.message).toEqual("Network Error");
  });
});
