// 1 Создать класс счетчика, который будет иметь поле count - значение счетчика. Объект класса будет иметь следующие методы: метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.

// class Counter {
//   constructor() {
//     this.count = 0
//   }

//   getCount() {
//     return this.count
//   }

//   increment() {
//     this.count += 1
//   }

//   decrement() {
//     this.count -= 1
//   }
// }

// const counter1 = new Counter()
// counter1.decrement()
// console.log('Counter:', counter1.getCount())




// 2. Реализуйте класс Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя), secondName (фамилия), rate (ставка за день работы), days (количество отработанных дней) сountOfDetails(количество выполненных деталей). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, каждый из которых будет возвращать соответствующее поле в объекте. И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days. Добавить метод, который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0

// class WorkerMethods {
//   getSalary() {
//     return this.rate * this.days;
//   }

//   getName() {
//     return this.name;
//   }

//   getSecondName() {
//     return this.secondName;
//   }

//   getRate() {
//     return this.rate;
//   }

//   getDays() {
//     return this.days;
//   }

//   setRate(rate) {
//     if (rate >= 0) {
//       this.rate = rate;
//     }
//   }

//   setDays(days) {
//     if (days >= 0) {
//       this.days = days;
//     }
//   }

//   setCountOfDetails(details) {
//     if (details >= 0) {
//       this.countOfDetails = details;
//     }
//   }

//   resetCountOfDetails() {
//     this.countOfDetails = 0;
//   }
// }

// class Worker extends WorkerMethods {
//   constructor(name, secondName, rate, days, countOfDetails) {
//     super();
//     this.name = name;
//     this.secondName = secondName;
//     this.rate = rate;
//     this.days = days;
//     this.countOfDetails = countOfDetails;
//   }
// }

// const worker1 = new Worker('Jonh', 'Smith', 5, 22, 5);
// console.log('Salary:', worker1.getSalary())
// worker1.setDays(15)
// console.log('Salary:', worker1.getSalary())





// 3. Реализуйте класс MyString, объект которого будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и дела

// class MyString {

//   revers(str) {
//     return str.split('').reverse().join('')
//   }

//   ucFirst(str) {
//     const newArr = str.split('').map((el, index) => {
//       if(index === 0) {
//         return el.toUpperCase()
//       }
//       return el
//     })

//     return newArr.join('')
//   }

//   ucWords(str) {
//     const newArr = str.split(' ').map(el => el.replace(el[0], el[0].toUpperCase()))
//     return newArr.join(' ')
//   }
// }

// const newStr = new MyString()

// console.log(newStr.revers('hello'))
// console.log(newStr.ucFirst('hello'))
// console.log(newStr.ucWords('hello world'))





// 4. Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы: getFullName, getEmail.

// 5. Реализуйте класс Student, который будет наследовать класс User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).

// class User {
//   constructor(name, secondName, email) {
//     this.name = name
//     this.secondName = secondName
//     this.email = email
//   }

//   getFullName() {
//     return this.name + ' ' + this.secondName
//   }

//   getEmail() {
//     return this.email
//   }
// }

// class Student extends User {
//   constructor(name, secondName, email, year) {
//     super(name, secondName, email)
//     this.year = year
//   }

//   getCourse() {
//     const currentYear = new Date().getFullYear()
//     return currentYear - this.year + ' курс'
//   }

// }

// const student1 = new Student('Jonh', 'Smith', 'smith@gmail.com' , 2019)

// console.log(student1.getFullName())
// console.log(student1.getCourse())
