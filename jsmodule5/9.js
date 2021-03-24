class Car {
    brand;
    model;
    price;
  
    constructor({ brand, model, price }) {
        // Инициализация объявленных свойств
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));