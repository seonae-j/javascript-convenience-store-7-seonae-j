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
  findProduct(name) {
    const object = this.#product.find((item) => item.name === name);
    return object;
  }

  checkPromotion(obj, name) {
    if (obj.find((item) => item.promotion !== 'null')) {
      return obj
        .filter((item) => item.name === name && item.promotion !== 'null')
        .map((item) => item.promotion);
    }
  }
}

export default Stock;
