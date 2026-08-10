// =========================
// Current Year
// =========================

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML = `© ${currentYear} Aryan Dhole. All rights reserved.`;


// =========================
// Navigation
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
