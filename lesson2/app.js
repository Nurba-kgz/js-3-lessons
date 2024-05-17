//Основы асинхроности

 //синхронный код

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

//Асинхронный код
//
// setTimeout(() => {
//     console.log(1)
// }, 2000)
//
// console.log(2)
//
//
// const logger = (name) => {
//     console.log('hello' + name)
// }
// setTimeout(() => {
//     logger('Nurdin')
// }, 3000)
//
// logger('James')
//
// let count = 0
//  const  interval = setInterval( () => {
//     count++
//     document.querySelector('span').innerHTML = count
//      if (count === 5){
//          clearInterval(interval)
//      }
// }, 1000)
//
// setTimeout( () => {
//     clearInterval(interval)
// }, 5000)


//Event loop - цикл событий
//V8 - считывается JS код
//
// const button = document.querySelector('button')
//
// button.onclick = () => {
//     setTimeout( () => {
//         console.log('Clicked!')
//     }, 1000)
// }
//
// console.log('loading...')

const persons = [{name}] [
    {name: 'Hurry Potter', age: '14' },
    {name: 'CJ', age: '24'},
    {name: 'Kira Yoshikage', age: '21'},
    {name: 'Jotaro', age: '17'},
    {name: 'Kairat Nurtas', age: '35'},
    {name: 'Чикатило', age: '40'}
    ]

const  wrapper = document.querySelector('.wrapper')

persons.forEach((person) => {
    const  card = document.createElement( 'div')
    card.setAttribute('class', 'card')
    card.innerHTML - person.name

    wrapper.append(card)
})