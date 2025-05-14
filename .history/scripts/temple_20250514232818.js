const toggleMenu = document.getElementById("menu-show")
toggleMenu.addEventListener("click", function() {
    toggleMenu.classList.toggle("show");
});

const menuOff = document.getElementById("menu")
menuOff.addEventListener("click", function(){
    menuOff.classList.toggle("show")
})
const lastModifiedDate = new Date(document.lastModified);
console.log(lastModifiedDate);
document.getElementById("currentyear").textContent = lastModifiedDate;