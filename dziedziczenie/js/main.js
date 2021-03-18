//Get, używasz do pobierania wartości, a set do przypisania wartości. 
let course = {
    name: 'Podstawy JavaScript',
    price: 50,
    currency: 'PLN', 
    priceInfo() {
        return `Cena: ${course.price} ${course.currency}`;
    }
};

console.log(course.priceInfo()); //Cena: 50 PLN
let course = {
    name: 'Podstawy JavaScript',
    price: 50,
    currency: 'PLN', 
    get priceInfo() {
        return `Cena: ${course.price} ${course.currency}`;
    },
    set priceInfo(value) {
        let values = value.split(' ');
        this.price = values[0];
        this.currency = values[1];
    }
};

console.log(course.priceInfo); //Cena: 50 PLN
course.priceInfo = '20 USD';
console.log(course.priceInfo); //Cena: 20 USD
course.priceInfo = '20 USD';
