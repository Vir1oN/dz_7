// - При помощи for in вывести все ключи  всех объектов
// - При помощи Object.keys вывести все ключи всех объектов
// let car = {
//     fkjf: 'dflkf',
//     ksdfk: 'fgkkf',
//     mbmdk: 24,
//     kjdfsjdk: true,
//     dkjjcv: 2.7
// }
// let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// for (const carKey in car) {
//     console.log(carKey);
// }
// for (const manKey in man) {
//     console.log(manKey);
// }
// console.log(Object.keys(car));
// console.log(Object.keys(man));
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {
//         name: 'Boston',
//         population: 847847,
//         country: 'USA',
//         region: 'NA'
//     },
//     {
//         name: 'Signapore',
//         population: 49458,
//         country: 'Signapore',
//         region: 'Asia'
//     },
//     {
//         name: 'Tel-Aviv',
//         population: 6678447,
//         country: 'Israel',
//         region: 'Mediterranean'
//     },
//     {
//         name: 'Hannover',
//         population: 535061 ,
//         country: 'Germany',
//         region: 'Lower Saxony'
//     },
//     {
//         name: 'Lviv',
//         population: 4000000,
//         country: 'Ukraine',
//         region: 'Eastern Europe'
//     },
// ]
// - проитерировать каждый массив из задания  при помощи while.
// - проитерировать каждый массив из задания  при помощи for .
// - проитерировать каждый массив из задания  при помощи  for of.

// let i = 0;
// while (i < cities.length)
// {
//     console.log(cities[i]);
//     i++
// }
//
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
//
// for (let city of cities) {
//     console.log(city);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// console.log(JSON.stringify(man));
// console.log(JSON.stringify(car));

// - взять json из задания 11 и превратить их обратно в объекты.
// console.log(JSON.parse(JSON.stringify(man)));
// console.log(JSON.parse(JSON.stringify(car)));
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArray = [];
// let json;
// for (const city of cities) {
//     json = JSON.stringify(city);
//     newArray.push(json);
// }
// console.log(newArray);



// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];
// let usersSkills = [];
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill, '\n-------------------');
//         usersSkills.push(skill);
//     }
// }
// console.log(usersSkills);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let newUserBlock;
// for (const user of users) {
//     newUserBlock = document.createElement('div');
//     newUserBlock.innerHTML = `${user.name}, ${user.age}, status: ${user.status}, skills:` + function () {
//         let skills = ' ';
//         for (const skill of user.skills) {
//             skills += skill + ' ';
//         }
//         return skills;
//     }();
//     document.body.appendChild(newUserBlock);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// let newUserBlock;
// for (const user of users) {
//     newUserBlock = document.createElement('div');
//     // for (const userKey in user) {
//     //     newUserBlock.innerHTML += `<div> ${userKey}: ${user[userKey]} </div>`;
//     // }
//     let newUserEntries = Object.entries(user);
//     for (const entry of newUserEntries) {
//         newUserBlock.innerHTML += `<div> ${entry[0]}: ${entry[1]} </div>`;
//     }
//     newUserBlock.innerHTML += '<hr>'
//     document.body.appendChild(newUserBlock);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];

// let users = [
//             {
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             },
//             {
//                 name: 'petya',
//                 age: 30,
//                 status: true,
//                 address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             },
//             {
//                 name: 'kolya',
//                 age: 29,
//                 status: true,
//                 address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             },
//             {
//                 name: 'olya',
//                 age: 28,
//                 status: false,
//                 address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             },
//             {
//                 name: 'max',
//                 age: 30,
//                 status: true,
//                 address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             },
//             {
//                 name: 'anya',
//                 age: 31,
//                 status: false,
//                 address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             },
//             {
//                 name: 'oleg',
//                 age: 28,
//                 status: false,
//                 address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             },
//             {
//                 name: 'andrey',
//                 age: 29,
//                 status: true,
//                 address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             },
//             {
//                 name: 'masha',
//                 age: 30,
//                 status: true,
//                 address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             },
//             {
//                 name: 'olya',
//                 age: 31,
//                 status: false,
//                 address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             },
//             {
//                 name: 'max',
//                 age: 31,
//                 status: true,
//                 address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             }];
//
// let newUserBlock;
// for (const user of users) {
//     newUserBlock = document.createElement('div');
//     let newUserEntries = Object.entries(user);
//     for (const entry of newUserEntries) {
//         if (entry[0] !== 'address') {
//             newUserBlock.innerHTML += `<div> ${entry[0]}: ${entry[1]} </div>`;
//         }
//         else {
//             let addressBlock = document.createElement('div');
//             let address = entry[1];
//             for (const addressKey in address) {
//                 addressBlock.innerHTML += `<div>${addressKey}: ${address[addressKey]} <\div>`;
//             }
//
//             newUserBlock.appendChild(addressBlock);
//         }
//     }
//     newUserBlock.innerHTML += '<hr>'
//     document.body.appendChild(newUserBlock);
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let user_city = []
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             let newUser = JSON.stringify(user);
//             newUser = newUser.replace('}', ',');
//             let newCity = JSON.stringify(city);
//             newUser += newCity.substr(1, newCity.length); //дописуєм місто, забравши { з початку
//             newUser = JSON.parse(newUser);
//             user_city.push(newUser);
//             }
//         }
// }
// console.log(user_city);