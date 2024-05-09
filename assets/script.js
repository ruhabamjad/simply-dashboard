let dropdownBtns = [...document.querySelectorAll(".dropdown")];
let collapse = document.getElementById("collapse");
let nav = document.querySelector(".nav");

dropdownBtns.forEach((dropdownBtn) => {
        let dropdownContent = dropdownBtn.querySelector(".dropdown-content");
        dropdownBtn.addEventListener("click", (e) => {
        dropdownContent.classList.toggle("max-height-400px");
    });
});

collapse.addEventListener("click", (e) => {
    nav.classList.toggle("left");
})