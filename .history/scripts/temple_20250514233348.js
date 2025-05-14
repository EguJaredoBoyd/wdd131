const toggleMenu = document.getElementById("menu-show")
toggleMenu.addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show").style.display === "none";
});

const menuOff = document.getElementById("menu")
menuOff.addEventListener("click", function(){
    menuOff.classList.toggle("show")
})
const lastModifiedDate = new Date(document.lastModified);
console.log(lastModifiedDate);
document.getElementById("currentyear").textContent = lastModifiedDate;