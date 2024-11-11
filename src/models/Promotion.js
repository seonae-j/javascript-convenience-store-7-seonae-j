class Promotion {
  constructor({ name, buy, get, start_date, end_date }) {
    this.name = name;
    this.buy = parseInt(buy, 10);
    this.get = parseInt(get, 10);
    this.startDate = new Date(start_date);
    this.endDate = new Date(end_date);
  }

  isActive() {
    const today = new Date();
    return today >= this.startDate && today <= this.endDate;
  }
}

export default Promotion;
