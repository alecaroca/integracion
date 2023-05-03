const API_URL="https://jsonplaceholder.typicode.com/users"
const HTMLResponse = document.querySelector("#app");

fetch(API_URL)
    .then((response)=> response.json())
    .then((users)=>{
        console.log(users)
        const usuarios = users.map((user) => `<tr><td class="text-center">${user.name}</td><td class="text-center">${user.email}</td><td class="text-center">${user.phone}</td><td class="text-center">${user.website}</td></tr>`)
        HTMLResponse.innerHTML = usuarios
    });