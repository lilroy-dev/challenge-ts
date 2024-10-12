// Напиши функцию, которая принимает объект, представляющий товар (с полями name — строка и price — число), и возвращает строку с описанием товара. Твоя задача — типизировать объект и функцию.

interface Product {
    name: string;
    price: number;
}

function describeProduct(product:Product):string {
    return `Товар: ${product.name}, Цена: ${product.price} руб.`;
}

const product:Product = {
    name: "Ноутбук",
    price: 50000
};

console.log(describeProduct(product));
