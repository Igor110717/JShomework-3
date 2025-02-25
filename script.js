// Задание 1

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// console.log(user);
// user.hobby = 'skydiving';
// console.log(user);
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// console.log(keys);
// for (const key of keys) {
// console.log(`${key} : ${user[key]}`);
// }

// Задание 2

// const countProps = function(obj) {
// return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Задание 3

// const findBestEmployee = function(employees) {
  
//   const keysEmployees = Object.keys(employees);
//   let bestEmployee = keysEmployees[0]; 
//   for (const key of keysEmployees) {
//     if (employees[key] > employees[bestEmployee])
//       bestEmployee = key;
//   }
//   return bestEmployee
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// Задание 4

// const countTotalSalary = function(employees) {
//     let total = 0;
//     const keysEmployees = Object.keys(employees);

//     for ( const key of keysEmployees) {
//        total += employees[key];
//     }
// return total
//   };
  
//   console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// Задание 5

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
  
// const getAllPropValues = function(arr, prop) {
// const arrProperty = [];
// for (const elmement of arr) {
//   if (elmement[prop] !== undefined) {
//   arrProperty.push(elmement[prop]);
// }
// }
// return arrProperty
//   };
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []


// Задание 6 

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {

// for (const product of allProdcuts) {
//   if (product.name === productName) {
//   return product.price * product.quantity
// }
// }
// }

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
