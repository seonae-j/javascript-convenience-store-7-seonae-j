import { MissionUtils } from '@woowacourse/mission-utils';

const OutputView = {
  printProducts() {
    MissionUtils.Console.print(
      `안녕하세요. W편의점입니다.\n현재 보유하고 있는 상품입니다.\n\n`
    );
    MissionUtils.Console.print('- 콜라 1,000원 10개 탄산2+1');
  },

  printOutOfStock() {
    MissionUtils.Console.print(`재고 없음`);
  },

  printReceipt() {
    MissionUtils.Console.print(`==============W 편의점==============\n`);
    MissionUtils.Console.print(`상품명   수량   금액\n`);
    MissionUtils.Console.print(`콜라   3   3,000\n`);
    MissionUtils.Console.print(`===============증	 정===============\n`);
    MissionUtils.Console.print(`콜라   1\n`);
    MissionUtils.Console.print(`====================================\n`);
    MissionUtils.Console.print(`총구매액   8   13,000\n`);
    MissionUtils.Console.print(`행사할인       -1,000\n`);
    MissionUtils.Console.print(`멤버십할인      -3,000\n`);
    MissionUtils.Console.print(`내실돈        9,000\n`);
  },
};

export default OutputView;
