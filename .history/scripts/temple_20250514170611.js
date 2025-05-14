const toggleMenu = document.getElementById("menu-toggle")
toggleMenu.addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show");
});

const menuOff = document.getElementById("cancel-button")
menuOff.addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("show")
})
const lastModifiedDate = new Date(document.lastModified);
console.log(lastModifiedDate);
document.getElementById("currentyear").textContent = lastModifiedDate;