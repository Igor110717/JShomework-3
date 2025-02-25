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