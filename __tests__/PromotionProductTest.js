import Product from '../src/domains/Product.js';
import PromotionProduct from '../src/domains/PromotionProduct.js';
import Promotion from '../src/models/Promotion.js';

describe('상품의 프로모션 여부 테스트', () => {
  beforeAll(() => {
    jest.spyOn(Product.prototype, 'setProduct').mockResolvedValue([
      { name: '콜라', price: 1000, stock: 10, promotion: '탄산2+1' },
      { name: '사이다', price: 1000, stock: 8, promotion: '탄산2+1' },
      { name: '사이다', price: 1000, stock: 7, promotion: 'null' },
      { name: '비타민워터', price: 1500, stock: 6, promotion: 'null' },
    ]);

    jest.spyOn(PromotionProduct.prototype, 'checkDate').mockResolvedValue([
      {
        name: '탄산2+1',
        buy: 2,
        get: 1,
        start_date: '2024-01-01',
        end_date: '2024-12-31',
      },
      {
        name: 'MD추천상품',
        buy: 1,
        get: 1,
        start_date: '2024-01-01',
        end_date: '2024-12-31',
      },
      {
        name: '반짝할인',
        buy: 1,
        get: 1,
        start_date: '2024-11-01',
        end_date: '2024-11-30',
      },
    ]);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('프로모션 상품의 프로모션명을 확인', async () => {
    const promotion = new PromotionProduct('사이다');
    const promotionName = await promotion.checkPromotion();

    expect(promotionName).toBe(8);
  });

  test('프로모션 기간이 유효하지 않을 경우 에러 발생', async () => {
    const promotion = new PromotionProduct('사이다');

    jest.spyOn(Promotion.prototype, 'isActive').mockResolvedValue(false);

    await expect(promotion.checkPromotion()).rejects.toThrow(
      '[ERROR] 해당 프로모션 기간이 아닙니다.'
    );
  });

  test('프로모션이 아닌 일반상품임을 확인하는 값 반환', async () => {
    const promotion = new PromotionProduct('비타민워터');
    const stock = await promotion.checkPromotion();

    expect(stock).toBeNull();
  });
});
