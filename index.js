
const navMenu = document.querySelector("#navMenu");
const toggler = document.getElementById('toggle');


toggler.addEventListener("click", function () {
    navMenu.classList.toggle("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener("click", () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth'});
})

const allLoadings = document.querySelectorAll('.loading');


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkmode', isDarkModeEnabled);
}

toggler.addEventListener("click", toggleDarkMode);

window.addEventListener("load", () => {
    const isDarkModeEnabled = localStorage.getItem("darkmode");


    if (isDarkModeEnabled == "true") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    setInterval(() => {
        allLoadings.forEach(item => {
            item.classList.remove("loading");
        });
    }, 2000);
});


