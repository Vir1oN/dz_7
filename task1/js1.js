//-- створити об'єкт (не меньше 5ти властивостей) який описує книгу, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом, та вивести його в консоль
// let book = {
//     title: "The Quest of Iranon",
//     author:
//         {
//             name: 'H.P. Lovecraft',
//             genres: ['horror', 'dark fantasy', 'mythological'],
//             deadInPoverty: true
//         },
//     genre: 'short story',
//     numOfPages: 10,
//     language: 'eng'
// }
//
// console.log(book);
// for (const bookKey in book) {
//     console.log(book[bookKey]);
// }
// /Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// let users = [
// 				{name: 'vasya', age: 31, status: false},  //0
// 				{name: 'petya', age: 30, status: true}, //1
// 				{name: 'kolya', age: 29, status: true}, //2
// 				{name: 'olya', age: 28, status: false}, //3
// 				{name: 'max', age: 30, status: true}, //4
// 				{name: 'anya', age: 31, status: false}, //5
// 				{name: 'oleg', age: 28, status: false}, //6
// 				{name: 'andrey', age: 29, status: true}, //7
// 				{name: 'masha', age: 30, status: true}, //8
// 				{name: 'olya', age: 31, status: false}, //9
// 				{name: 'max', age: 31, status: true} //10
// 			];
//
// console.log(users[7].status);
// console.log(users[4].status, users[10].status);
// console.log(users[users.length - 2].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age, users[4].name);
// console.log(users[5].age, users[5].status);

//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// let textOfContent = document.getElementById('content').innerText;
// console.log(textOfContent);
// let textOfRules = document.getElementById('rules').innerText;
// console.log(textOfRules);
// document.getElementById('content').innerText = 'eireu';
// document.getElementById('rules').innerText = 'cxvjcdf';

// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій

// let allElements = document.body.getElementsByTagName('*');
// for (let element of allElements) {
//     element.style.backgroundColor = 'red';
//     element.style.color = 'blue';
// }

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classesOfRules = document.getElementById('rules').classList;
// console.log(classesOfRules);

// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let fc_rules = document.getElementsByClassName('fc_rules');
// console.log(fc_rules);
// for (let element of fc_rules) {
//     element.style.color = 'red';
// }
