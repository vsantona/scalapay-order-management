interface AmountData {
  amount: String;
  currency: String;
}

interface Consumer {
  phoneNumber: String;
  givenNames: String;
  surname: String;
  email?: String;
}

interface Billing {
  name: String;
  line1: String;
  suburb: String;
  postcode: String;
  countryCode: String;
  phoneNumber: String;
}

interface Shipping {
  name: String;
  line1: String;
  suburb?: String;
  postcode: String;
  countryCode: String;
  phoneNumber?: String;
}

interface Item {
  name: String;
  category: String;
  subcategory?: String[];
  brand?: String;
  gtin?: String;
  sku: String;
  quantity: Number;
  price: AmountData;
}

interface Discount {
  displayName?: String;
  amount?: AmountData;
}

interface Merchant {
  redirectConfirmUrl: String;
  redirectCancelUrl: String;
}

export interface Order {
  totalAmount: AmountData;
  consumer: Consumer;
  billing: Billing;
  shipping: Shipping;
  items: Item[];
  discounts: Discount[];
  merchant: Merchant;
  merchantReference: String;
  taxAmount: AmountData;
  shippingAmount: AmountData;
  orderExpiryMilliseconds?: Number;
}
