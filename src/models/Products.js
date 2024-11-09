class Products {
  constructor({ name, price, stock, promotion }) {
    this.name = name;
    this.price = parseInt(price, 10);
    this.stock = parseInt(stock, 10);
    this.promotion = promotion || 'null';
  }
}

export default Products;
