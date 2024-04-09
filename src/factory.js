
class Product {
    constructor (name, price, photo, model, sale, category){
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.model = model;
        this.sale = sale;
        this.Product = category;
            
    console.log(this);
    }

}

function createProduct (name, price, photo, model, category) {
    let sale = false;
    if (price < 100) {
        sale = true;
    }
    return new Product (name, price, photo, model, sale, category);
}

createProduct('Galaxy', 200, '', 'model 20','smartphone');

createProduct('Xiaomi', 50, '', 'model 10','smartphone');

/*
* Слід реалізувати Factory об'єкт для створення об'єктів товарів інтернет-магазину.
Умовою фабрики очікуємо додавання значення поля {sale: true} до об'єкта товару, при умові що ціна товара менша 100$.
Наприклад, сутностями товарів можуть бути різні моделі смартфонів, планшетів та іншої техніки.
*/

