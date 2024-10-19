

export const hero = () => {
    // Function to handle adding/removing the black background when scrolling
        function changeHeaderBackgroundOnScroll() {
            // Select the header element
            const header = document.querySelector('header');

            // Listen for the window's scroll event
            window.addEventListener('scroll', () => {
                // Check if the page is scrolled down more than 100 pixels
                console.log('scrollPosition >>>>', window.scrollY)
                if (window.scrollY > 100) {
                    // Add the 'scrolled' class to the header if scrolled past 100px
                    header.classList.add('scrolled');
                } else {
                    // Remove the 'scrolled' class if scrolled less than 100px
                    header.classList.remove('scrolled');
                }
            });
        }

    // Call the function to enable the scroll functionality
    changeHeaderBackgroundOnScroll();
}