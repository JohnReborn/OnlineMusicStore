const button = document.getElementById("darkModeButton");
const background = document.getElementById("middle");

if (localStorage.getItem("mode") =="dark"){
    background.classList.add("darkMode")
    button.classList.add("darkModeButtonDarkened")
}


window.onload = () => {
    if (localStorage.getItem("mode") =="dark"){
        background.classList.add("darkMode")
        button.classList.add("darkModeButtonDarkened")
    }
}

button.addEventListener("click",() => {

    if (background.classList.contains('darkMode')){
        background.classList.remove('darkMode')
        button.classList.remove("darkModeButtonDarkened")
        localStorage.setItem("mode","light")
    }
    else {
        background.classList.add('darkMode')
        button.classList.add("darkModeButtonDarkened")
        localStorage.setItem("mode","dark")
    }
});


