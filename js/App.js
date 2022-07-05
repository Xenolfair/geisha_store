const BtnFirst = document.querySelector ("button");
const TitleFirst = document.querySelector("h1");

function getName (){
    let userName  = prompt("¿Cuál es tu nombre?");
    localStorage.setItem("Name", userName);
    TitleFirst.textContent = "Bienvenido/a " + userName;
}

if (!localStorage.getItem("Name")) {
    getName();
}   else {
    let StorageName = localStorage.getItem("Name");
    TitleFirst.textContent = "Bienvenido/a " + StorageName;
}

BtnFirst.addEventListener("click", ()=>{
    getName();
})
