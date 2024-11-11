// - 프로모션 상품의 재고를 관리한다.
//     - 프로모션 상품의 재고 데이터만 가져온다. `promotion !== null`
// - 프로모션 상품을 확인할 때 오늘 날짜가 프로모션 기간과 겹치는 지 확인한다.
// - 프로모션 상품일 경우 해당 프로모션 상품의 기간을 확인하고 오늘 날짜와 비교한다.
// - 프로모션 상품일 경우 Stock.js의 재고를 확인한다.
// - 프로모션 상품의 재고가 떨어진 경우 일반 재고를 확인할 수 있도록 프로모션 재고는 떨어졌음을 알린다.

import Promotion from '../models/Promotion.js';
import readFileObject from '../utils/ReadFile.js';
import Product from './Product.js';

class PromotionProduct {
  #name;
  #promotion;

  // name은 사용자가 입력한 상품명이 들어간다.
  constructor(name, promotion) {
    this.#name = name;
    this.#promotion = promotion;
  }

  async getProduct() {
    const product = new Product();
    const products = await product.setProduct();

    const promotionalProduct = products.filter(
      (item) => item.promotion !== 'null'
    );
    return promotionalProduct;
  }

  async checkDate() {
    const array = await readFileObject('public/promotions.md');
    this.#promotion = array.map((item) => new Promotion(item));

    return this.#promotion;
  }

  validateDateRange(isActive) {
    if (!isActive) {
      throw new Error('[ERROR] 해당 프로모션 기간이 아닙니다.');
    }
  }

  async checkDateRange(promotionName) {
    const promotionData = await this.checkDate();

    const promotion = promotionData.find((item) => item.name === promotionName);
    if (!promotion) {
      throw new Error('[ERROR] 해당 이름의 프로모션이 없습니다.');
    }

    const isActive = promotion.isActive();
    this.validateDateRange(isActive);
  }

  async checkPromotion() {
    const products = await this.getProduct();
    const product = products.find((item) => item.name === this.#name);

    if (product) {
      // 상품이 존재
      await this.checkDateRange(product.promotion);
      return product.stock;
    }
    // 일반 상품의 재고를 확인할 수 있는 메서드로 이동하는 값으로 변경하기
    return null;
  }
}

export default PromotionProduct;
