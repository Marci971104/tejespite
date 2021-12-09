import { User } from "./user.js";


var url='https://jsonplaceholder.typicode.com/users/'
var users=[];
const ul = document.querySelector('#users');

fetch(url)
.then(Response=>Response.json())
.then(data =>{

    data.forEach((user:User) => {
        let user2= new User(user.id, user.username, user.email);
        users.push(user2);
        
        console.log(user.username);
        
    });
    users.forEach((user:User)=>{
        let li = document.createElement('li');
        li.textContent = user.username;
        ul.appendChild(li);


    });


    console.log(data);
});


