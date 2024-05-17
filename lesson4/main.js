// JSON - JavaScript object
//
//
// const person = {
//     name: 'nurbolot',
//     age: 20
// }
//
// console.log(JSON.stringify(person))
//
//
// const jsonPerson = JSON.stringify(person)
//
// console.log(JSON.parse(jsonPerson))
//
// const personObject = JSON.parse(jsonPerson)
// console.log(personObject)



//AJAX - asynchronous javaScript and XML
// XGR - XMLHttpRequest

const btn = document.querySelector('button')

btn.onclick = () => {
    const request = new XMLHttpRequest()//1 .создание запрос
    request.open('GET', 'data.json')//2. указание метода запроса и уксазания адреса
    request.setRequestHeader('Content-type', 'application/json')//3.указование загаловка
    request.send()//4. отпавка запроса

    request.onload = () => {
        const data =JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    }
}

