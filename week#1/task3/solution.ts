type Result2 = {
    [key: string]: number;
};

function mapStringsToLengths(strings: string[]): Result2 {
    return strings.reduce((acc, str) => {
        acc[str] = str.length;
        return acc;
    }, {} as Result2);
}

const words = ["apple", "banana", "cherry"];
console.log(mapStringsToLengths(words));
