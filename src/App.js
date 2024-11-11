import { Console } from '@woowacourse/mission-utils';
import Purchase from './domains/Purchase.js';
import Product from './domains/Product.js';

class App {
  async run() {
    const purchase = new Purchase();
    const product = new Product();

    try {
      await product.setProduct();
      Console.print(product.printProduct());
      const userInput = await purchase.getPurchase();
      product.findProduct(userInput.name);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
