// reduce 

const myNums = [1, 2, 3, 4];

// const newNums = myNums.reduce( (acc, num) => {
//     console.log(`Accumulator: ${acc} and Current Value: ${num}`);
//     return acc + num;
// }, 0);

const newNums = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTotal = shoppingCart.reduce( (acc, items) => {
    return acc + items.price;
}, 0);

console.log(priceTotal);