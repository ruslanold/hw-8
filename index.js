
// // ==============================================
// // -  Створити функцію конструктор для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru

// function f (name, desc, attrs ) {
//     this.name = name;
//     this.desc = desc;
//     this.attrs = [{
//             name: 'style',
//             desc: 'применяется для определения стилей элемента веб-страницы. '
//         },
//         {
//             name: 'id',
//             desc: 'применяется для определения индефикатора элемента веб-страницы. '
//         },
//         {
//             name: 'class',
//             desc: 'применяется для определения класса элемента веб-страницы. '
//         }
//     ];
// }


// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
// //  Приклад результату
// //    {
// //         titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //         attrs: [
// //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //         {/*some props and values*/},
// //         {/*...*/},
// //         {/*...*/},
// //         ]

// //    }
// // ==============================================

// const a = new f('a', 
//                 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.'
//                 )
// console.log(a);

// const div = new f('div', 
//                 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
//                 )
// console.log(div);

// const h1 = new f('h1', 
//                 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. '
//                 )
// console.log(h1);

// const span = new f('span', 
//                 'Тег <span> предназначен для определения строчных элементов документа'
//                 )
// console.log(span);

// const input = new f('input', 
//                 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.'
//                 )
// console.log(input);

// const form = new f('form', 
//                 'Тег <form> устанавливает форму на веб-странице.'
//                 )
// console.log(form);

// const option = new f('option', 
//                 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. '
//                 )
// console.log(option);

// const select = new f('select', 
//                 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.'
//                 )
// console.log(select);


// // ==============================================
// // -  Створити класс  для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru
// class F {
//     constructor (name, desc, attrs ) {
//         this.name = name;
//         this.desc = desc;
//         this.attrs = [{
//                 name: 'style',
//                 desc: 'применяется для определения стилей элемента веб-страницы. '
//             },
//             {
//                 name: 'id',
//                 desc: 'применяется для определения индефикатора элемента веб-страницы. '
//             },
//             {
//                 name: 'class',
//                 desc: 'применяется для определения класса элемента веб-страницы. '
//             },
//             attrs 
//         ];
//     }
// }


// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
// //  Приклад результату
// //    {
// //         titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //         attrs: [
// //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //         {/*some props and values*/},
// //         {/*...*/},
// //         {/*...*/},
// //         ]

// //    }
// // ==============================================


// const aa = new F('a', 
//                 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//                 {
//                     name: 'href',
//                     desc: 'Задает адрес документа, на который следует перейти.' 
//                 });
// console.log(aa);

// const div1 = new F('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.')
// console.log(div1);

// const h11 = new F('h1', 
//                 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. '
//                 )
// console.log(h11);

// const span1 = new F('span', 
//                 'Тег <span> предназначен для определения строчных элементов документа'
//                 )
// console.log(span1);

// const input1 = new F('input', 
//                 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.'
//                 )
// console.log(input1);

// const form1 = new F('form', 
//                 'Тег <form> устанавливает форму на веб-странице.'
//                 )
// console.log(form1);

// const option1 = new F('option', 
//                 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. '
//                 )
// console.log(option1);

// const select1 = new F('select', 
//                 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.'
//                 )
// console.log(select1);



// // ==============================================
// // - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// let car = {
//     brend: 'Mazda',
//     model: 'rx7',
//     year: 2008,
//     maxSpeed: 240,
//     egine: 2.2,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info: function(){
//         console.log(this);
//     },
//     increaseMaxSpeed: function(speed) {
//         this.maxSpeed = speed;
//     },
//     changeYear: function(newValue) {
//         this.year = newValue;
//     },
//     addDriver: function(driver) {
//         this.driver = driver
//     }
// }
// car.drive()
// car.info()

// car.increaseMaxSpeed(300)
// console.log(car, 'increaseMaxSpeed -> 300');

// car.changeYear(2010)
// console.log(car, 'changeYear -> 2010');

// car.addDriver({name: "string", age: 'number'})
// console.log(car, 'addDriver object')






// // ==============================================
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// function car1 (brend, model, year, maxSpeed, egine) {
//     this.brend = brend
//     this.model = model
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.egine = egine

//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function(){
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function(speed) {
//         this.maxSpeed = speed;
//     }
//     this.changeYear = function(newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function(driver) {
//         this.driver = driver
//     }
// }

// let mazda = new car1 ('Mazda', 'rx7', 2008, 240, 2.2)
// mazda.drive()
// mazda.info()

// mazda.increaseMaxSpeed(300)
// console.log(mazda.maxSpeed, 'increaseMaxSpeed -> 300');

// mazda.changeYear(2010)
// console.log(mazda.year, 'changeYear -> 2010');

// mazda.addDriver({name: "string", age: 'number'})
// console.log(mazda.driver, 'addDriver object')



// // ==============================================
// // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================
// class Car{
//     constructor(brend, model, year, maxSpeed, egine) {
//         this.brend = brend
//         this.model = model
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.egine = egine
//     }
        
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed(speed) {
//         this.maxSpeed = speed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver
//     }
// } 

// let honda = new Car ('Honda', 'acord', 2008, 240, 2.2)
// honda.drive()
// honda.info()

// honda.increaseMaxSpeed(300)
// console.log(honda.maxSpeed, 'increaseMaxSpeed -> 300');

// honda.changeYear(2010)
// console.log(honda.year, 'changeYear -> 2010');

// honda.addDriver({name: "Petro", age: '20'})
// console.log(honda.driver, 'addDriver object')




// // ==============================================
// // -створити класс попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// // ==============================================

// class Human {
//     constructor(name, age, size){
//         this.name = name
//         this.age = age
//         this.size = size
//     }
// }

// class Princess extends Human {
//     constructor(name, age, size){
//         super(name, age, size)
//     }
// }

// class Prince extends Human {
//     constructor(name, age, size, shoe){
//         super(name, age, size)
//         this.girlFrend = {};
//         this.shoe = shoe;
//     }

//     searchPrincess(array){
//         for (let index = 0; index < array.length; index++) {
//             const element = array[index];
//             if(this.shoe === element.size ){
//                 this.girlFrend = element
//             }
//         }
//     }
// }


// let arr = []

// for (let index = 0; index < 10; index++) {
//     let princess = new Princess(`Mari${index}`, 20 + index, 30 + index)
//     arr.push( princess )
    
// }




// function randomSize (min, max) {
//     return Math.floor(min + Math.random() * (max - min));
// }

// const prince = new Prince('Bogdan', 30, 43, randomSize(30,40));
// prince.searchPrincess(arr)

// console.log(prince.girlFrend, `I am ${prince.girlFrend.name} your lady`)
