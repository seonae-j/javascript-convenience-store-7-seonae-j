import Purchase from '../domains/Purchase.js';

class Controller {
  #purchase;

  constructor() {
    this.#purchase = new Purchase();
  }

  async start() {
    await this.#purchase;
  }
}

export default Controller;
