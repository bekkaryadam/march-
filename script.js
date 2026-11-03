// MENU MOBILE

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});


// PRODUCT DETAILS

const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modalTitle");

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        modalTitle.textContent = button.dataset.product;

        modal.classList.add("show");

    });

});


// CLOSE MODAL

document.getElementById("modalClose").addEventListener("click", () => {

    modal.classList.remove("show");

});

modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


// AGE VERIFICATION

const ageGate = document.getElementById("ageGate");

if (localStorage.getItem("pouchlineAdult") !== "yes") {
    ageGate.classList.add("show");
}

document.getElementById("ageYes").addEventListener("click", () => {

    localStorage.setItem("pouchlineAdult", "yes");

    ageGate.classList.remove("show");

});

document.getElementById("ageNo").addEventListener("click", () => {

    document.querySelector(".age-box").innerHTML =
        "<h2>Access denied</h2><p>This website is for adults only.</p>";

});