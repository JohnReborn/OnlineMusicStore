const button = document.getElementById("darkModeButton");
const background = document.getElementById("middle");

// local storage allows you to save "settings"
if (localStorage.getItem("mode") =="dark"){
    background.classList.add("darkMode")
    button.classList.add("darkModeButtonDarkened")
}

// not sure if it helps but just tried to make the dark mode load immediately
window.onload = () => {
    if (localStorage.getItem("mode") =="dark"){
        background.classList.add("darkMode")
        button.classList.add("darkModeButtonDarkened")
    }
}

// when the user clicks the button it first checks what mode it is already in and adds the opposite whilst saving the new mode
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


