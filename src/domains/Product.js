import Products from '../models/Products.js';
import readFileObject from '../utils/ReadFile.js';
import OutputView from '../view/OutputView.js';
import Purchase from './Purchase.js';

class Product {
  #product;

  constructor() {
    this.#product = [];
  }

  setPurchase() {
    const purchase = new Purchase(this.userInput);
    return purchase;
  }

  async setProduct() {
    const array = await readFileObject('public/products.md');
    this.#product = array.map((item) => new Products(item));

    return this.#product;
  }

  // 사용자가 입력한 상품명과 동일한 상품명을 가진 객체를 가져온다.
  findProduct(name) {
    const object = this.#product.find((item) => item.name === name);
    return object;
  }

  checkPromotion(arr, name) {
    if (arr.find((item) => item.promotion !== 'null')) {
      return arr
        .filter((item) => item.name === name && item.promotion !== 'null')
        .map((item) => item.promotion);
    }
  }

  printProduct() {
    OutputView.printProducts();
    this.#product.forEach((item) =>
      OutputView.defaultPrint(
        `- ${item.name} ${item.price}원 ${stock} ${promotion}`
      )
    );
  }
}

export default Product;
