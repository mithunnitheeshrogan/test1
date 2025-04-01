const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Toggle menu visibility
            nav.classList.toggle('show-menu');
            // Toggle the menu icon (hamburger / close)
            toggle.classList.toggle('show-icon');
        });
    }
};

// Call the function with correct IDs
showMenu('nav-toggle', 'nav-menu');


// Show Drop Down Menu
/*
const dropdownItems = document.querySelectorAll('.dropdown__item');

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button');

    // Select each button click
    dropdownButton.addEventListener('click', () => {
        // Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown');

        // Call the toggleItem function
        toggleItem(item);

        if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown);
        }
    });
});

const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown__container');

    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdown');
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown');
    }
};
*/

document.addEventListener("DOMContentLoaded", () => {
    const dropdownItems = document.querySelectorAll('.dropdown__item');

    dropdownItems.forEach((item) => {
        const dropdownButton = item.querySelector('.dropdown__button');
        const dropdownContainer = item.querySelector('.dropdown__container');

        if (dropdownButton && dropdownContainer) {
            dropdownButton.addEventListener('click', () => {
                const showDropdown = document.querySelector('.show-dropdown');

                toggleItem(item);

                if (showDropdown && showDropdown !== item) {
                    toggleItem(showDropdown);
                }
            });
        }
    });

    function toggleItem(item) {
        const dropdownContainer = item.querySelector('.dropdown__container');

        if (dropdownContainer) {
            if (item.classList.contains('show-dropdown')) {
                dropdownContainer.style.maxHeight = "0px";
                item.classList.remove('show-dropdown');
            } else {
                dropdownContainer.style.maxHeight = dropdownContainer.scrollHeight + 'px';
                item.classList.add('show-dropdown');
            }
        }
    }
});

/*

//Delete Dropdown Styles
const mediaQuery = matchMedia('(min-width: 1118px)');

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    const dropdownContainers = document.querySelectorAll('.dropdown__container'); // Move inside function

    if (mediaQuery.matches) {
        dropdownContainers.forEach((e) => {
            e.removeAttribute('style');
        });

        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
};

// Listen for resize event
window.addEventListener('resize', removeStyle);

*/
// Delete Dropdown Styles
const mediaQuery = matchMedia('(min-width: 1118px)');

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    const dropdownContainers = document.querySelectorAll('.dropdown__container'); 
    const dropdownItems = document.querySelectorAll('.dropdown__item'); // Define dropdownItems

    if (mediaQuery.matches) {
        dropdownContainers.forEach((e) => {
            e.removeAttribute('style');
        });

        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown'); // Ensure dropdowns close on resize
        });
    }
};

// Listen for resize event
window.addEventListener('resize', removeStyle);

