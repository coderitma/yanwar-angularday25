export class Product {
  productId: number;
  url: string;

  constructor(productId: number, url: string) {
    this.productId = productId;
    this.url = url;
  }
}