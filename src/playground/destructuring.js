// const person = {
//   name: "Andrew",
//   age: 45,
//   location: {
//     city: "JHB",
//     temp: 92
//   }
// };

// const { name, age } = person;
// const { city, temp } = person.location;

// console.log(`${name} is ${age}.`);
// console.log(`It's ${temp} in ${city}.`);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     //name: "Penguin"
//   }
// };

// const { name = "Self-published" } = book.publisher;

// console.log(`${name}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee,, medium] = item;

console.log(`A medium ${coffee} costs ${medium}`)
