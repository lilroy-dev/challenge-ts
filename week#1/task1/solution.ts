 interface Item {
    name: string;
    id: number;
 }

 interface Result {
    [key:number]: Item;
 }

function mapById(items: Item[]):Result {
    return items.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {} as Result);
}

const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" }
];

console.log(mapById(items));