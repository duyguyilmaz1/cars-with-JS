let models=[
    {
        name:"Toyota C-HR",
        image:"/img/toyota.jpg",
        link:"https://www.arabalar.com.tr/toyota/c-hr/2024/1-8-hybrid-passion-x-style"
    },
    {
        name:"Volkswagen Amarok",
        image:"/img/volkswagen.jpg",
        link:"https://www.arabalar.com.tr/volkswagen/amarok/2024/2-0-style"
    },
    {
        name:"Peugeot 508",
        image:"/img/peugeot.jpg",
        link:"https://www.arabalar.com.tr/peugeot/508/2024/1-5-bluehdi-gt"
    }
]
setInterval(function(){
    let index= 
Math.floor(Math.random()*models.length)

let img= document.querySelector(".card-img-top");
let title= document.querySelector(".card-title");
let a=document.querySelector("a");

img.setAttribute("src" , models[index].image);
a.setAttribute("href", models[index].link);
title.textContent=models[index].name;
}, 1000)

