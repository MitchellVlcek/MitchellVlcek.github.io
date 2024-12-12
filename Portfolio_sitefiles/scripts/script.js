/*
Mitchell Vlcek
script.js
11/17/2024
*/

// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");

    // Check the current display property and toggle it
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none"; // Hide the menu
    } else {
        navlinks.style.display = "block"; // Show the menu
    }
}