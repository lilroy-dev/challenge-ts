// Напиши функцию, которая принимает массив строк и возвращает объект, где ключами будут строки из массива, а значениями — длины этих строк. Типизируй функцию, массив и объект, который она возвращает.

function mapStringsToLengths(strings) {
    return strings.reduce((acc, str) => {
        acc[str] = str.length;
        return acc;
    }, {});
}

const words = ["apple", "banana", "cherry"];
console.log(mapStringsToLengths(words));
