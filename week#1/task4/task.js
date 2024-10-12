// Напиши функцию, которая принимает объект, представляющий товар (с полями name — строка и price — число), и возвращает строку с описанием товара. Твоя задача — типизировать объект и функцию.

function describeProduct(product) {
    return `Товар: ${product.name}, Цена: ${product.price} руб.`;
}

const product = {
    name: "Ноутбук",
    price: 50000
};

console.log(describeProduct(product));
