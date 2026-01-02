const toggleBtn = document.getElementById('dark-mode-toggle');
const icon = toggleBtn.querySelector('i');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

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


document.getElementById('churchContactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const originalText = btn.innerHTML;
    
    // UI Feedback
    btn.disabled = true;
    btn.innerText = "Sending...";

    // Since it's a static S3 site, we simulate success. 
    // You would typically use a service like Formspree here.
    setTimeout(() => {
        alert("Thank you! Your message has been sent to Glorious Joy Church.");
        btn.disabled = false;
        btn.innerHTML = originalText;
        this.reset();
    }, 1500);
});

document.querySelectorAll('.open-modal').forEach(button => {
    button.onclick = function() {
        document.getElementById('volunteerModal').style.display = "block";
    }
});

document.querySelector('.close-modal').onclick = function() {
    document.getElementById('volunteerModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('volunteerModal')) {
        document.getElementById('volunteerModal').style.display = "none";
    }
}


// main.js
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.event-card');
    
    // Add an entrance animation
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // Staggered appearance
    });
});

// Automatically update the copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer to fade in cards as you scroll down
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.ministry-card').forEach(card => {
    card.classList.add('fade-in-up'); // Add initial hidden state class
    observer.observe(card);
});

// Check if it's currently Sunday morning (Kenya Time)
function updateLiveStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const hour = now.getHours();
    
    const liveBadge = document.querySelector('.badge-live');
    
    // If it's Sunday between 9 AM and 1 PM
    if (day === 0 && hour >= 9 && hour <= 13) {
        liveBadge.style.display = 'flex';
    } else {
        // Change text to "Next Service: Sunday"
        liveBadge.innerHTML = '<i class="far fa-calendar"></i> Next: Sunday';
        liveBadge.style.background = '#f3f4f6';
        liveBadge.style.color = '#4b5563';
        liveBadge.style.animation = 'none';
    }
}

updateLiveStatus();

// main.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement; // This targets the <html> tag
    const icon = toggleBtn.querySelector('i');

    // 1. Check for saved preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    // 2. Click Event
    toggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
        
        console.log("Theme switched to:", newTheme); // Debugging
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }
});