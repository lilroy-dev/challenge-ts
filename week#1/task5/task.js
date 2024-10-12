// Создай функцию, которая принимает два массива одинаковой длины: один массив — строки, другой — числа. Функция должна возвращать объект, где ключами будут строки, а значениями — соответствующие числа из второго массива. Твоя задача — типизировать оба массива и функцию.

function zipToObject(keys, values) {
    const result = {};
    keys.forEach((key, index) => {
        result[key] = values[index];
    });
    return result;
}

const keys = ["a", "b", "c"];
const values = [1, 2, 3];
console.log(zipToObject(keys, values));
