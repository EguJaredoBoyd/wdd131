const toggleMenu = document.getElementById("menu-show")
toggleMenu.addEventListener("click", function() {
    this.classList.toggle("show");
});

const menuOff = document.getElementById("cancel-button")
menuOff.addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("show")
})
const lastModifiedDate = new Date(document.lastModified);
console.log(lastModifiedDate);
document.getElementById("currentyear").textContent = lastModifiedDate;