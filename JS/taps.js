export const tabs = () => {
    // Get all the tab items and content items
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');
    
    // console.log("tabItems ---->>>", tabItems);
    // console.log("tabcontentItems ----->>>", tabContentItems);

    // Function to handle selecting a tab item
    function selectItem(e) {
        // Get the clicked tab element using e.target
        const clickedTab = e.target.closest('div');
        console.log("clikedTab", clickedTab)

        // Remove border and content show class from all
        removeBorder();
        removeShow();

        // Add a border to the clicked tab
        clickedTab.classList.add('tab-border');

        // Find the corresponding content item by constructing the ID dynamically
        const tabContentItem = document.querySelector(`#${clickedTab.id}-content`);

        // Show the selected tab's content
        tabContentItem.classList.add('show');
    }

    // Function to remove the "show" class from all tab content items
    function removeShow() {
        tabContentItems.forEach(item => item.classList.remove('show'));
    }

    // Function to remove the "tab-border" class from all tab items
    function removeBorder() {
        tabItems.forEach(item => item.classList.remove('tab-border'));
    }

    // Add event listener to each tab item for click events
    tabItems.forEach((item) => item.addEventListener('click', selectItem));
};
