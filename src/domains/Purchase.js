import InputView from '../view/InputView.js';

class Purchase {
  #purchase;

  constructor(purchase) {
    this.#purchase = purchase;
  }

  // 사용자에게 구매값 입력받기
  async userInput() {
    const userInput = await InputView.readItem();
    return userInput;
  }

  // 사용자가 입력한 상품을 상품별로 나누기
  async setPurchase() {
    const purchaseInput = await this.userInput();
    const purchase = purchaseInput.split(',').map((item) => item.trim());

    return purchase;
  }

  // 구매한 상품의 상품명과 개수를 식별하기 위해 상품별로 객체화하여 배열로 만들기
  setPurchaseObject(purchase) {
    const result = [];

    purchase.forEach((text) => {
      const match = text.match(/\[(\D+)-(\d+)\]/);
      if (match) {
        const name = match[1];
        const amount = parseInt(match[2]);
        result.push({ name, amount });
      }
    });

    return result;
  }

  async getPurchase() {
    const purchase = await this.setPurchase();
    return this.setPurchaseObject(purchase);
  }
}

export default Purchase;
