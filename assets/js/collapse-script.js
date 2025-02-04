// Function to show a specific section and update button styles
function showSection(sectionId) {
    // Hide all sections with class 'collapsible'
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.classList.add('hidden');
    });

    // Reset styles for all buttons
    const buttons = document.querySelectorAll('.department-button');
    buttons.forEach(button => {
        button.classList.remove('active'); // Remove the active class
        button.style.color = "#000"; // Reset to default text color
        button.style.border = "none"; // Remove border
    });

    // Show the section with the provided id
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }

    // Add 'active' class to the clicked button and update styles
    const activeButton = document.getElementById(sectionId + "-link");
    if (activeButton) {
        activeButton.classList.add('active'); // Add active class
        activeButton.style.color = "#1baa80"; // Change text color
        activeButton.style.borderBottom = "2px solid #1baa80"; // Add border with specific color
    }
}

// Initially show the 'All Department' section as active with default background color
document.addEventListener('DOMContentLoaded', function () {
    const firstSection = document.querySelector('.collapsible');
    firstSection.classList.remove('hidden');

    // Add active class and default background color to the 'All Department' button
    const allButton = document.getElementById('all-link');
    if (allButton) {
        allButton.classList.add('active');
        allButton.style.color = "#1baa80"; // Highlight the default active button
        allButton.style.borderBottom = "2px solid #1baa80"; // Add border for the default active button
    }

    // Add event listeners to department buttons
    const buttons = document.querySelectorAll('.department-button');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = button.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});
