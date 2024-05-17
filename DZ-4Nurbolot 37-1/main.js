const wrapper = document.querySelector('.wrapper')


let xhr = new XMLHttpRequest()

xhr.open("GET", "./persons.json")
xhr.send()

xhr.onload=()=>{
    let res = xhr.response
    const data = JSON.parse(res)
    wrapper.innerHTML = data.map((item)=>(

        `<div class="card">
            <h1>${item.name}</h1>
            <h2> AGE: ${item.age}</h2>
            <div class="card_img" style="background: url(${item.person_photo})"></div>
        </div>`
    ))
}


const xhr2 = new XMLHttpRequest()
xhr2.open('GET', "./data.json")
xhr2.send()
xhr2.onload=() =>{
    const data = xhr2.response
    console.log(JSON.parse(data))
}