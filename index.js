const API_URL='https://jsonplaceholder.typicode.com/users'
const API_URL2='https://alecaroca-vigilant-fishstick-4pr9vw954qwh7qxj-8000.preview.app.github.dev/Cliente'
const aplication = document.querySelector('.app');

/* fetch(API_URL)
    .then((response)=> response.json())
    .then((users)=>{
        console.log(users)
        const usuarios = users.map((user) => `<tr><td class="text-center">${user.name}</td><td class="text-center">${user.email}</td><td class="text-center">${user.phone}</td><td class="text-center">${user.website}</td></tr>`)
        aplication.innerHTML = usuarios
    }); */

    fetch(API_URL)
        .then(response=> response.json())
        .then(data => {
            console.log(data)
            let body = '';
            data.forEach(data => {
                body += `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.email}</td></tr>`
            });
            console.log(data)
            document.getElementById('app').innerHTML = body
        })
        .catch(error => console.log(error))
    
    fetch(API_URL2)
        .then(response=> response.json())
        .then(data2 => {console.log(data2)
})
        .catch(error => console.log(error))


        