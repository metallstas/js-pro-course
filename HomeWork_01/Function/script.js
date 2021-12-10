// 1 Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.

// function summ(...args) {
//   const result = args.reduce((acc, el) => {
//     return acc + el
//   }, 0)
//   return result
// }

// console.log(summ(1, 2, 3 ,4 ,5))




// 2 Написать функцию, которая принимает первым аргументом массив,
// а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
// (indexOf, findIndex не использовать)

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




// 3 Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате. (Использовать замыкание)

// function fn() {
//   let counter = 0
//   let first = 1
//   return () => {
//     if (first === 1) {
//       first += 1
//       return 1
//     } else {
//       counter = first ** 2
//       first += 1
//       return counter
//     }
//   }
// }

// const val = fn()
// console.log('Вызов! Квадрат вызова:', val())
// console.log('Вызов! Квадрат вызова:', val())
// console.log('Вызов! Квадрат вызова:', val())







// 4 Напишите функцию, которая разделит массив на части заданного размера и вернет массив элементами которого являются эти части. Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function splitArr(arr, num) {

//   Вариан 1

//   const copyArr = [...arr]  
//   let result = []                           

//   for (let i = 0; i < arr.length; i++) {   
//     if(copyArr.length !== 0) {                         
//       result.push(copyArr.splice(0, num))              
//     } else {                                           
//       break
//     }                                                  
//   }                                                    
  
//   Вариант 2

//   let newArr = []
//   const result = []

//   arr.forEach((el, index) => {
//     newArr.push(el)
//     if(newArr.length === num) {
//       result.push(newArr)
//       newArr = []
//     } else if(arr.length - 1 === index){
//       result.push(newArr)
//     }
//   })
  
//   return result
// }
// console.log('Исходный массив:', arr)
// console.log('Результат:', splitArr(arr, 5))




// 5 Написать функцию, которая приобразуем любую строку в строку написанную кебаб кейсом (все буквы с маленькой буквы и на месте пробелов - тире) Например: 'Hello World' -> 'hello-world'; 'Hello dear hell' -> 'hello-dear-hell'

// const str = 'Hello world'

// function kebabCase(str) {
//   return str.toLowerCase().replaceAll(' ', '-')
// }

// console.log('Kebab Case:', kebabCase(str))