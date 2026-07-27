/* =========================================
   InstaGrow - Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MOBILE MENU
    ================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("show");

            if (mobileMenu.classList.contains("show")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }

        });

        // Mobile menu link click ke baad menu close
        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("show");
                menuBtn.innerHTML = "☰";

            });

        });

    }


    /* ================================
       CLOSE MENU WHEN CLICK OUTSIDE
    ================================= */

    document.addEventListener("click", function (event) {

        if (!menuBtn || !mobileMenu) return;

        if (
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            mobileMenu.classList.remove("show");
            menuBtn.innerHTML = "☰";

        }

    });


    /* ================================
       LOGIN USER PROFILE LINK
    ================================= */

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {

        const loginLinks =
            document.querySelectorAll('a[href="login.html"]');

        loginLinks.forEach(function (link) {

            link.textContent = "Profile";
            link.href = "profile.html";

        });

    }


    /* ================================
       BUTTON CLICK EFFECT
    ================================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 120);

        });

    });


    /* ================================
       PLAN ORDER BUTTONS
    ================================= */

    const orderButtons =
        document.querySelectorAll(".plan-card .btn");

    orderButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Order button clicked:",
                button.textContent.trim()
            );

        });

    });


    /* ================================
       SAVE LAST VISITED PAGE
    ================================= */

    localStorage.setItem(
        "lastVisitedPage",
        window.location.pathname
    );


    /* ================================
       HERO IMAGE CHECK
    ================================= */

    const hero =
        document.querySelector(".hero");

    if (hero) {

        console.log(
            "InstaGrow Hero Section Loaded"
        );

    }


    /* ================================
       LOGO IMAGE CHECK
    ================================= */

    const logo =
        document.querySelector(".logo img");

    if (logo) {

        logo.addEventListener("error", function () {

            console.warn(
                "Logo image not found. Check: images/logo.png"
            );

        });

    }

});


/* =========================================
   GLOBAL TOGGLE MENU FUNCTION
   Agar HTML me onclick="toggleMenu()" laga ho
   to bhi mobile menu chalega.
========================================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    const button =
        document.querySelector(".menu-btn");

    if (!menu) return;

    menu.classList.toggle("show");

    if (button) {

        if (menu.classList.contains("show")) {
            button.innerHTML = "✕";
        } else {
            button.innerHTML = "☰";
        }

    }

}/* =========================================
   InstaGrow - Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MOBILE MENU
    ================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("show");

            if (mobileMenu.classList.contains("show")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }

        });

        // Mobile menu link click ke baad menu close
        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("show");
                menuBtn.innerHTML = "☰";

            });

        });

    }


    /* ================================
       CLOSE MENU WHEN CLICK OUTSIDE
    ================================= */

    document.addEventListener("click", function (event) {

        if (!menuBtn || !mobileMenu) return;

        if (
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            mobileMenu.classList.remove("show");
            menuBtn.innerHTML = "☰";

        }

    });


    /* ================================
       LOGIN USER PROFILE LINK
    ================================= */

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {

        const loginLinks =
            document.querySelectorAll('a[href="login.html"]');

        loginLinks.forEach(function (link) {

            link.textContent = "Profile";
            link.href = "profile.html";

        });

    }


    /* ================================
       BUTTON CLICK EFFECT
    ================================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 120);

        });

    });


    /* ================================
       PLAN ORDER BUTTONS
    ================================= */

    const orderButtons =
        document.querySelectorAll(".plan-card .btn");

    orderButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Order button clicked:",
                button.textContent.trim()
            );

        });

    });


    /* ================================
       SAVE LAST VISITED PAGE
    ================================= */

    localStorage.setItem(
        "lastVisitedPage",
        window.location.pathname
    );


    /* ================================
       HERO IMAGE CHECK
    ================================= */

    const hero =
        document.querySelector(".hero");

    if (hero) {

        console.log(
            "InstaGrow Hero Section Loaded"
        );

    }


    /* ================================
       LOGO IMAGE CHECK
    ================================= */

    const logo =
        document.querySelector(".logo img");

    if (logo) {

        logo.addEventListener("error", function () {

            console.warn(
                "Logo image not found. Check: images/logo.png"
            );

        });

    }

});


/* =========================================
   GLOBAL TOGGLE MENU FUNCTION
   Agar HTML me onclick="toggleMenu()" laga ho
   to bhi mobile menu chalega.
========================================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    const button =
        document.querySelector(".menu-btn");

    if (!menu) return;

    menu.classList.toggle("show");

    if (button) {

        if (menu.classList.contains("show")) {
            button.innerHTML = "✕";
        } else {
            button.innerHTML = "☰";
        }

    }

}
