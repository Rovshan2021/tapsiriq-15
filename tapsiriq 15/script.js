let icon = document.getElementById("icon");
let menu1 = document.getElementsByClassName("sideBar");

function menu (){
    if (menu1.className == "menu2"){
        menu1.className = "sideBar";
    }
    else{
        menu1.className = "menu2";
    }
    if(icon.className == "fas fa-bars"){
        icon.className = "fas fa-times";
    }else{
        icon.className = "fas fa-bars";
    }
}