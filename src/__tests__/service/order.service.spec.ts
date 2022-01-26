import mockAxios from "jest-mock-axios";
import { Order } from "../../model/order";
import { BASE_URL, createOrder } from "../../service/order.service";

jest.mock("axios");

describe("creatOrder", () => {
  afterEach(() => {
    mockAxios.reset();
  });
  test("given a valid order when createOrder then return checkout info", async () => {
    let order: Order = {
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
    let response = {
      status: 200,
      data: {
        token: "11KYRIVVVS",
        expires: "2022-01-23T17:26:28.840Z",
        checkoutUrl: "https://portal.staging.scalapay.com/checkout/11KYRIVVVS",
      },
    };
    mockAxios.post.mockResolvedValueOnce(response);

    let actual = await createOrder(order);

    expect(mockAxios.post).toHaveBeenCalledWith(`${BASE_URL}/orders`, order, {
      headers: { Authorization: "Bearer qhtfs87hjnc12kkos" },
    });
    expect(actual).toEqual(response);
  });
  test("given a not valid order when createOrder then return bad request with related error", async () => {
    let order: Order = {
      totalAmount: { amount: "", currency: "" },
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
    let response = {
      status: 400,
      data: {
        errorCode: "api_validationerror",
        errorId: "error-19g6kkyrokrbn",
        message: {
          status: 400,
          statusText: "Bad Request",
        },
      },
    };
    mockAxios.post.mockResolvedValueOnce(response);

    let actual = await createOrder(order);

    expect(mockAxios.post).toHaveBeenCalledWith(`${BASE_URL}/orders`, order, {
      headers: { Authorization: "Bearer qhtfs87hjnc12kkos" },
    });
    expect(actual).toEqual(response);
  });
});
test("given a generic error occurs invoking external API when createOrder then return internal server error with related error", async () => {
  // given
  let order: Order = {
    totalAmount: { amount: "", currency: "" },
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
  let response = {
    status: 500,
    data: {
      message: "Network Error",
    },
  };
  let message = "Network Error";
  mockAxios.post.mockRejectedValueOnce(new Error(message));

  let actual = await createOrder(order);

  expect(mockAxios.post).toHaveBeenCalledWith(`${BASE_URL}/orders`, order, {
    headers: { Authorization: "Bearer qhtfs87hjnc12kkos" },
  });
  expect(actual).toEqual(response);
});
