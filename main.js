// function ff (data) {
//     let str1 = ''
//     let str2 = ''
//     let searchStr = ''
//     for (const i of data) {
//         if (Number(i.value)){
//             if (str1[i.time] || i.time === 0) {
//                 str1 += i.value
//             } else {
//                 for (let j = i.time; str1.length < j; j--) {
//                     str1 += '_';
//                 }
//                 str1 += '_';
//                 str1 += i.value;
//             }
//         } else {
//             if (str2[i.time] || i.time === 0) {
//                 str2 += i.value
//             } else {
//                 for (let j = i.time; str2.length < j; j--) {
//                     str2 += '_';
//                 }
//                 str2 += '_';
//                 str2 += i.value;
//             }
//         }
//     }
//     for (let i = 0; i < str2.length; i++) {
//         if (str1[i] === '1') {
//             searchStr += str2[i]
//         }
//     }
//     return searchStr
// }
// // __010__01111
// // yandex__adventure__
// console.log(ff([
//     {
//         time: 0,
//         value: 'yandex'
//     },
//     {
//         time: 8,
//         value: 'adventure',
//     },
//     {
//         time: 3,
//         value: '010',
//     },
//     {
//         time: 9,
//         value: '01111',
//     }
// ]))
// const cities = [
//     'Геленджик',
//     'Домодедово',
//     'Казань',
//     'Люберцы',
//     'Нижний Новгород',
//     'Орёл',
//     'Санкт-Петербург',
// ];
//
// function ff (cities) {
//     let cities2 = [...cities]
//     let newCities = []
//     let endCity = ''
//     for (let [index, city] of cities2.entries()) {
//         let lastSimbol = ''
//         let isEnd = true
//         if (city[city.length - 1] === 'ь' || city[city.length - 1] === 'ъ') {
//             lastSimbol = city[city.length - 2]
//         } else {
//             lastSimbol = city[city.length - 1]
//         }
//
//        let filterArray = cities2.filter((item) => item !== city)
//         for (let [index2, city2] of filterArray.entries()) {
//             if (city2[0].toLowerCase() == lastSimbol) {
//                 isEnd = false
//             }
//         }
//         if (isEnd) {
//             endCity = cities[index]
//             newCities.push(endCity)
//         }
//     }
//     cities2 = cities2.filter((item) => item !== endCity)
//     console.log(cities2)
//     console.log(newCities)
//
//     let a = recurs(newCities, cities2)
//     console.log('recurs',a.reverse())
//     return a.reverse()
// }
//
// console.log(ff(cities))
//
// function recurs (filterArr, baseArr) {
//         let filterArr2 = [...filterArr]
//         let baseArr2 = [...baseArr]
//         for (let [index, city] of baseArr2.entries()) {
//             let lastSimbol = ''
//             if (city[city.length - 1] === 'ь' || city[city.length - 1] === 'ъ') {
//                 lastSimbol = city[city.length - 2]
//             } else {
//                 lastSimbol = city[city.length - 1]
//             }
//             // console.log(city[city.length - 1])
//             // console.log(filterArr2[filterArr2.length - 1][0].toLowerCase())
//             console.log( lastSimbol, filterArr2[filterArr2.length - 1][0].toLowerCase())
//             if (lastSimbol === filterArr2[filterArr2.length - 1][0].toLowerCase())  {
//                 console.log('!!!', lastSimbol, filterArr2[filterArr2.length - 1][0].toLowerCase())
//                 console.log(baseArr2)
//                 // console.log(index)
//                 filterArr2.push(city)
//                 console.log('baseArr2', baseArr2)
//                 baseArr2 = baseArr2.filter((с) => с !== city)
//                 console.log('baseArr2', baseArr2)
//             }
//         }
//         console.log('filterArr2', filterArr2)
//         console.log('baseArr2', baseArr2, baseArr2.length)
//         if (baseArr2.length == 0) {
//             console.log('!!!!!!')
//             return filterArr2
//         } else {
//             return recurs(filterArr2, baseArr2)
//         }
//
// }

// const em=document.createElement("script");em.type="text/javascript",em.async=!0,em.src="icallback.js";const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(em,s);
//
// Рик и Морти создали фирму по грузоперевозкам на Земле. Для работы водителями грузовиков они наняли
// Рики и Морти из других вселенных. Однако грузовикам сильно ограничили скорость и запретили им
// делать обгоны для безопасности людей, поскольку Рики и Морти из других вселенных не знаю земных правил.
// Из-за этих ограничений люди стали жаловаться, что грузовики начали собирать много пробок.
//
//     Сколько пробок из грузовиков посчитает Наблюдатель на N-ом километре дороги, если известно на каком
//     километре дороге находится каждый грузовик (position) и его скорость в км/час (speed).
//
//     Дополнительно:
//
// Если один грузовик догонят другой, то он начинают двигаться со скоростью впереди идущего. Когда один
// грузовик догнал другой, то расстоянием между ними можно пренебречь и считать что они находятся на одном и том же километре.
// Если один грузовик догнал другой на 0 километре дороги, то можно считать что они образовали одну пробку.
// Пробка - это один грузовик, или группа грузовиков которые, которые двигаются с одинаковой скоростью без промежутков.
//
//     Пример:
//
// Входные данные: {"target":100,"trucks":[{"position":0,"speed":4},{"position":2,"speed":2},{"position":4,"speed":1}]} Ответ: 1
//
// Объяснение: Грузовики, стартующие на позиции 0 (скорость 4) и 2 (скорость 2), становятся пробкой,
// встретившись друг с другом на позиции 4. Пробка движется со скоростью 2. Затем эта пробка (скорость 2) и грузовик,
// стартующий с позиции 4 (скорость 1), становятся пробкой, встречаясь друг с другом на позиции 6.
// Пробка движется со скоростью 1, пока не достигнет цели.
//
//     Формат ввода
// На вход подается объект следующей структуры:
//
// {
//     target: number,
//         trucks: Array<{position: number, speed: number}>
// }
// Где:
//
//     target - километр на котором стоит Наблюдатель trucks: Array<{position: number, speed: number}> -
//     массив объектов с позицией грузовика и его скоростью
//
// Формат вывода
// Необходимо вернуть number - число пробок которые насчитает наблюдатель
//
// Примечание
// Исходный код нужно оформить следующим образом:
//
//     module.exports = function (data) {
//         // ваше решение
//     }
