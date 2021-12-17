// №1
// Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
// const newArr = arr.map(el => el ** 2)
// console.log('Новый массив:', newArr)




// 2. Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const newArr = arr.reduce((acc, el) => {
//   return acc + el
// }, 0)
// console.log('Сумма:', newArr)




// 3. Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

// const num = 55566333787931
// const arr = String(num).split('')

// const checkNum = (arr, index, el) => arr.length && arr[index - 1] % 2 !== 0 && el % 2 !== 0

// const newArr = arr.reduce((acc, el, index) => {
//   if(checkNum(acc, index, el)) {
//     return acc.concat(':' + el)
//   } else {
//     return acc.concat(el)
//   }
// }, [])

// console.log(newArr.join(''))




// 4 Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.

// const arr1 = [1, 2, 3, 4]
// const arr2 = [1, 1, 4, 7, 5, 6]

// function differensArr(arr1, arr2) {

//   const maxArrLength = arr1.length > arr2.length ? arr1 : arr2
//   const minArrLength = arr1.length < arr2.length ? arr1 : arr2

//   const newArr = maxArrLength.map((el, index) => {
//     if(minArrLength[index]) {
//       return el - minArrLength[index]
//     } else {
//       minArrLength[index] = 0
//       return el - minArrLength[index]
//     }
//   })

//   return newArr
// }

// console.log('Результат:', differensArr(arr1, arr2))




// 5 Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

// const arr1 = [1, 2, 3, 4]
// const arr2 = [1, 8, 3, 4, 5, 6]

// function sumArr(arr1, arr2) {

//   const maxArrLength = arr1.length > arr2.length ? arr1 : arr2
//   const minArrLength = arr1.length < arr2.length ? arr1 : arr2

//   const newArr = maxArrLength.map((el, index) => {
//     if(minArrLength[index]) {
//       return el + minArrLength[index]
//     } else {
//       minArrLength[index] = 0
//       return el + minArrLength[index]
//     }
//   })

//   return newArr
// }

// console.log('Результат:', sumArr(arr1, arr2))




// 6 Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

// const arr = [1, 2, 3]
// const reversArr = [...arr].reverse()

// console.log('Исходный', arr)
// console.log('Развернутый:', reversArr)




// 7 Фильтр юзеров Создать массив объектов для юзеров. Пример:

// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

// const user = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}]

// const notAdult = []

// const adult = user.filter(el => {
//   if(el.age >= 18) {
//     return el
//   } else {
//     notAdult.push(el)
//   }
// })

// console.log('users:',user)
// console.log('not adult:', notAdult)
// console.log('adult:', adult)




// 8 Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

// const arr = [1, 2, 3, 4, 5, 2, 2, 4, 3, 1, 5, 3, 3, 1, 3, 2, 2, 2]

// const filteredArr = arr.filter((el, index) => arr.indexOf(el) === index)

// console.log(filteredArr)




// 9 Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

// let str = 'а роза упала на лапу Азора'

// function checkPalindrom(str) {
//   const oldStr = str.replaceAll(' ', '').toLowerCase()
//   const newStr = oldStr.split('').reverse().join('')
//   return newStr === oldStr
// }

// console.log(checkPalindrom(str))




// 10 Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function getIndexNum(arr, num) {

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i
//     }
//     if (i === arr.length - 1) {
//       return -1
//     }
//   }
// }

// console.log('Индекс:', getIndexNum(arrNum, 10))




// 11 Написать функцию search, которая принимает первым аргументом массив имен:
// [ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
// и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

// const nameArr = ['Ivan', 'Petr', 'Sidor', 'Petric']

// function search(arr, str) {
//   let lowStr = str.toLowerCase()

//   const result = arr.filter(el => {
//     let elem = el.toLowerCase()
//     return elem.includes(lowStr) ? el : null
//   })

//   return result
// }

// console.log(search(nameArr, 'eTr'))




// 12 Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:
// checkIsEqaul([1,2,3], [1,2,3]) -> true
// checkIsEqaul([1,2,3], [1,2,3,4]) -> false
// checkIsEqaul([1,2,3], [1,'2',3]) -> false

// const arr1 = [1, 2, 3]
// const arr2 = [1, '2', 3]

// function checkArr(arr1, arr2) {
//   let res

//   if (arr1.length !== arr2.length) {
//     return false
//   } else {
//     for(let i = 0; i < arr1.length; i++) {
//       if(arr1[i] === arr2[i]) {
//         res = true
//       } else {
//         return false
//       }
//     }
//   }
//   return res
// }

// console.log(checkArr(arr1, arr2))
