//1

const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

const assignGrades = (students) => {
  return students.map((student) => {
    let grade;
    if (student.percent >= 85) {
      grade = 5;
    } else if (student.percent >= 70) {
      grade = 4;
    } else if (student.percent >= 60) {
      grade = 3;
    }
    return { ...student, grade };
  });
};
const getNamesWithGrade = (baho) => {
  const studentsWithGrades = assignGrades(students);
  return studentsWithGrades
    .filter((student) => student.grade === baho)
    .map((student) => student.name);
};

console.log(getNamesWithGrade(5));

//2

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

const countAnimals = animals.reduce((acc, animal) => {
  acc[animal] = (acc[animal] || 0) + 1;
  return acc;
}, {});

console.log(countAnimals);

//3

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((num) => num * num);

console.log(squares);

//4 muj

const number = [1, -4, 12, 0, -3, 29, -150];

const rum = number.filter((number) => {
  return number !== 1;
});

console.log(rum);

//5

const fullName = "George Raymond Richard Martin";

const initials = fullName
  .split(" ")
  .map((word) => word[0])
  .join("");

console.log(initials);

//6

const people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

const sortedByAge = people.sort((a, b) => a.age - b.age);

const youngest = sortedByAge[0].age;
const oldest = sortedByAge[sortedByAge.length - 1].age;

const ageDifference = oldest - youngest;

console.log(ageDifference);

//7

let arr = [1, 2, 3, 4, 5, 6, 7];

const jekson = arr.filter((arr) => {
  return arr % 2 != 1;
});

console.log(jekson);

//8
const products = [
  { id: 3, name: "Product C", price: 200, rating: 4.5, discount: 10 },
  { id: 1, name: "Product A", price: 100, rating: 4.9, discount: 20 },
  { id: 4, name: "Product D", price: 150, rating: 4.1, discount: 15 },
  { id: 2, name: "Product B", price: 120, rating: 4.8, discount: 5 },
];

const sortById = products.slice().sort((a, b) => a.id - b.id);
console.log("Sorted by id:", sortById);

const sortByName = products
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", sortByName);

const sortByPrice = products.slice().sort((a, b) => b.price - a.price);
console.log("Sorted by price:", sortByPrice);

const sortByRating = products.slice().sort((a, b) => b.rating - a.rating);
console.log("Sorted by rating:", sortByRating);

const sortByDiscount = products.slice().sort((a, b) => a.discount - b.discount);
console.log("Sorted by discount:", sortByDiscount);

//9
const product = [
  { id: 2, name: "product c", price: 2, rating: 4, discount: 1 },
  { id: 1, name: "product a", price: 1, rating: 9, discount: 2 },
];
const topRatedProduct = product.slice().sort((a, b) => b.rating - a.rating)[0];

console.log("Top Rated Product:", topRatedProduct);

//10

const produc = [
  { id: 2, name: "javo", price: 7, rating: 5, discount: 8 },
  { id: 5, name: "jojo", price: 6, rating: 9, discount: 2 },
];

const cheapestProducts = produc
  .slice()
  .sort((a, b) => a.price - b.price)
  .slice(0, 2);

console.log("Cheapest Products:", cheapestProducts);

//11

const prod = [
  { id: 9, name: "C", price: 7, rating: 3, discount: 7 },
  { id: 4, name: "A", price: 6, rating: 8, discount: 9 },
];

const totalPrice = prod.reduce((acc, product) => acc + product.price, 0);

console.log("Total Price of Products:", totalPrice);

//12

const bum = [
  { id: 7, name: "c", price: 200, rating: 2, discount: 60 },
  { id: 9, name: "a", price: 100, rating: 1, discount: 30 },
];

const productNames = bum.map((product) => product.name);

console.log("Product Names:", productNames);

//13

const ilk = [
  { id: 3, name: "q", price: 250, rating: 5, discount: 20 },
  { id: 1, name: "w", price: 150, rating: 4, discount: 10 },
  { id: 4, name: "e", price: 300, rating: 3, discount: 90 },
  { id: 2, name: "r", price: 200, rating: 2, discount: 3 },
  { id: 5, name: "t", price: 100, rating: 1, discount: 2 },
];

const productWithId5 = ilk.find((ilk) => ilk.id === 5);

const productName = productWithId5 ? productWithId5.name : "Product not found";

console.log("Product Name:", productName);

//14

let kom = [
  {
    id: 6,
    name: "Smartphone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

kom = kom.filter((kom) => kom.id !== 4);

console.log("Updated Products:", kom);

//15

function isOnlyLetters(str) {
  return str.split("").every((char) => /^[a-zA-Z]$/.test(char));
}

console.log(isOnlyLetters("HelloWorld"));

//16

function getWordLengths(str) {
  return str.split(" ").map((word) => word.length);
}

const input = "Men Sultonqul Programmerman";
const output = getWordLengths(input);

console.log(output);

//17

function hasSpaces(str) {
  return str.split("").some((char) => char === " ");
}

const input1 = "Men Sultonqul Programmerman";
const output2 = hasSpaces(input1);

console.log(output2);

//18

function objectToArray(obj) {
  return Object.entries(obj).map(([key, value]) => key + value);
}

const input3 = { a: 2, b: 5, c: 7 };
const output4 = objectToArray(input3);

console.log(output4);

//19

const pupils = [
  { name: "Elbek", protcent: 95 },
  { name: "Zafar", protcent: 78 },
  { name: "Aziz", protcent: 83 },
  { name: "Jasur", protcent: 88 },
  { name: "Bobur", protcent: 66 },
  { name: "Kamron", protcent: 75 },
];

const result = pupils.reduce(
  (acc, pupil) => {
    if (pupil.protcent >= 70) {
      acc.passed++;
    } else {
      acc.failed++;
    }
    return acc;
  },
  { passed: 0, failed: 0 }
);

console.log("Passed:", result.passed);
console.log("Failed:", result.failed);

//20
