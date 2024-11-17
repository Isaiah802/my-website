// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dropdown Toggle (Optional for custom dropdown behavior)
document.querySelectorAll('.dropdown-toggle').forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.preventDefault();
        const menu = dropdown.nextElementSibling; // Get the dropdown menu
        menu.classList.toggle('show');  // Toggle visibility of the menu
    });
});


