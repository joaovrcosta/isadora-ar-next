export interface Product {
  id?: number;
  name?: string;
  price?: number | string;
  color?: string;
  talle?: string;
  categories?: string;
  sku?: string;
  discount?: number;
  discountPrice?: number | string;
  description?: string;
  extraDescription?: string;
  images?: string[];
  shippingInfo?: {
    title: string;
    description: string;
  };
  returnInfo?: {
    title: string;
    description: string;
  };
  paymentInfo?: {
    title: string;
    description: string;
  };
  quantity?: number;
}
