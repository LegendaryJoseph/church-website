// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-links');
    const header = document.querySelector('header .container');

    // Create the hamburger button dynamically
    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerHTML = `
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    `;

    header.appendChild(menuBtn);

    // Toggle Menu on Click
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        menuBtn.classList.toggle('toggle');
    });
});

// Automatically update the copyright year
document.getElementById('year').textContent = new Date().getFullYear();