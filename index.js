const API_URL="https://jsonplaceholder.typicode.com/users"
const HTMLResponse= document.querySelector("app");

/* $.get(API_URL, function(respuesta){
    console.log(respuesta)
    respuesta.forEach(function(item){
        console.log(item)
      
        $("#app").text(item)
    })

    const tpl = users.map((user) => document.write(user.name+ " "+ user.email+ "<br>"));
},"json") */

var usuarios;

fetch(API_URL)
    .then((response)=> response.json())
    .then((users)=>{
        console.log(users)
        const tpl = users.map((user) => user.name +" "+ user.email +"<br>");
        $("#app").text(tpl)
        /* $("#app").text(usuarios) */
        
    });