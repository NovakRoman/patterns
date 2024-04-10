/*
* Реалізація корзини покупок як Singleton. Потрібно забезпечити, щоб клас корзини покупок
був реалізований як одиночка. Це забезпечить те, що в системі буде тільки одна і та ж корзина покупок
для кожного користувача. Методи корзини повинні покрити додавання товара в корзину,
видалення товара з корзини по його id (тут можна використати Array.filter, або Array.slice, ...).
*/


  class Cart {
    constructor() {
        this.addedItems = []
        if (Cart.instance) {
            console.error("This class is a singleton!");
        }
        Cart.instance = this;
    }

    static addItem(newItem){
      Cart.instance.addedItems.push(newItem);
    }

    static removeItem(idToDelete){
      Cart.instance.addedItems = Cart.instance.addedItems.filter(item => item.id !== idToDelete);
    }
    
  }

const cart = new Cart();


Cart.addItem({id: 0, name: 'Samsung'});
Cart.addItem({id: 1, name: 'Iphone'});
Cart.addItem({id: 2, name: 'Xiaomi'});
Cart.addItem({id: 3, name: 'Motorola'});

Cart.removeItem(1);
Cart.removeItem(2);

console.log(cart);

