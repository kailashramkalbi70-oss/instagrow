// ================================
// MOBILE MENU
// ================================

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (!menu) return;

    menu.classList.toggle("show");
}


// ================================
// LOGIN / PROFILE LINK
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(
        localStorage.getItem("currentUser")
    );

    const loginLinks = document.querySelectorAll(
        'a[href="login.html"]'
    );

    if (user) {

        loginLinks.forEach(function (link) {

            link.textContent = "Profile";
            link.href = "profile.html";

        });

    }

});// ================================
// MOBILE MENU
// ================================

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (!menu) return;

    menu.classList.toggle("show");
}


// ================================
// LOGIN / PROFILE LINK
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(
        localStorage.getItem("currentUser")
    );

    const loginLinks = document.querySelectorAll(
        'a[href="login.html"]'
    );

    if (user) {

        loginLinks.forEach(function (link) {

            link.textContent = "Profile";
            link.href = "profile.html";

        });

    }

});
