import Products from '../models/Products.js';
import readFileObject from '../utils/ReadFile.js';

class Stock {
  #product;

  constructor() {
    this.#product = [];
  }

  async setProduct() {
    const array = await readFileObject('public/products.md');
    this.#product = array.map((item) => new Products(item));
  }

  // 사용자가 입력한 상품명과 동일한 상품명을 가진 객체를 가져온다.
  fineProduct(name) {
    return this.#product.find((item) => item.name === name);
  }

  getUserProducts() {
    return this.#product;
  }
}

export default Stock;
