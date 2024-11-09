import Stock from '../src/domains/Stock.js';

describe('재고 관리 테스트', () => {
  test('사용자가 입력한 상품이 프로모션 상품인지 확인한다.', () => {
    const stock = new Stock();
    const object = [
      {
        name: '콜라',
        price: '1000',
        stock: '10',
        promotion: '탄산2+1',
      },
      { name: '콜라', price: '1000', stock: '10', promotion: 'null' },
    ];

    expect(stock.checkPromotion(object, '콜라')).toContain('탄산2+1');
  });
});
