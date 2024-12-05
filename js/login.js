// Add functionality for switching tabs (Sign In / Register)
const signInTab = document.getElementById("signInTab");
const registerTab = document.getElementById("registerTab");

signInTab.addEventListener("click", () => {
    signInTab.classList.add("active");
    registerTab.classList.remove("active");
});

registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    signInTab.classList.remove("active");
});
