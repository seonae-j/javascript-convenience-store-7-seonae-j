import Purchase from '../src/domains/Purchase.js';
import InputView from '../src/view/InputView.js';

describe('사용자 구매 리스트 추출 테스트', () => {
  test('사용자가 입력한 값에 맞춰 구매 리스트를 올바르게 추출', async () => {
    const purchase = new Purchase();

    jest.spyOn(InputView, 'readItem').mockResolvedValue('[콜라-2], [감자칩-4]');

    const result = await purchase.getPurchase();
    const expected = [
      { name: '콜라', amount: 2 },
      { name: '감자칩', amount: 4 },
    ];

    expect(result).toEqual(expected);
  });
});
