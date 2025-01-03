import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  async readItem() {
    const inputPurchase = await MissionUtils.Console.readLineAsync(
      '구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])\n'
    );
    return inputPurchase;
  },

  readConfirm() {
    return {
      async isQuantityShort(productName) {
        const isQuantityShort = await MissionUtils.Console.readLineAsync(
          `현재 ${productName}은(는) 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)`
        );
        return isQuantityShort;
      },

      async isStockShort(productName, quantity) {
        const isStockShort = await MissionUtils.Console.readLineAsync(
          `현재 ${productName} ${quantity}개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)`
        );
        return isStockShort;
      },

      async hasMembership() {
        const hasMembership = await MissionUtils.Console.readLineAsync(
          `멤버십 할인을 받으시겠습니까? (Y/N)`
        );
        return hasMembership;
      },

      async addPurchase() {
        const addPurchase = await MissionUtils.Console.readLineAsync(
          `감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)`
        );
        return addPurchase;
      },
    };
  },
};

export default InputView;
