document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll('.page');
  const sidebarButtons = document.querySelectorAll('.step');
  const nextButtons = document.querySelectorAll('.Next');
  const backButton = document.querySelectorAll('.Back');
  const donePage = document.getElementById('done');
  const toggle = document.getElementById('toggle'); // Get the switch element

  let currentPageIndex = 0;

  // Function to show a specific page and hide others
  function showPage(index) {
    pages.forEach((page) => {
      page.style.display = 'none';
    });
    pages[index].style.display = 'flex';
    currentPageIndex = index;
  
    // Update step button background color
    sidebarButtons.forEach((button, i) => {
      if (i === index) {
        button.style.backgroundColor = 'blue'; // Set active step button color
      } else {
        button.style.backgroundColor = 'transparent'; // Reset other step buttons
      }
    });
  }

  // Function to handle the "Next" button click
  function handleNextClick() {
    // Check if all input fields are valid
    const currentPage = pages[currentPageIndex];
    const inputFields = currentPage.querySelectorAll('input[required]');
    let allValid = true;

    inputFields.forEach((input) => {
      if (!input.checkValidity()) {
        allValid = false;
        // Optionally, you can add custom validation error messages here
        // Example: input.setCustomValidity('Please fill in this field');
      }
    });

    if (allValid) {
      if (currentPageIndex < pages.length - 1) {
        showPage(currentPageIndex + 1);
      }
    } else {
      // Optionally, you can display an error message to the user
      alert('Please fill in all required fields.');
    }
  }

  // Function to handle the "Go back" button click
  function handleBackClick() {
    if (currentPageIndex > 0) {
      showPage(currentPageIndex - 1);
    }
  }

  // Function to toggle display of .replace and #replace based on the switch
  function handleSwitchToggle() {
    const monthlyReplace = document.querySelectorAll('.replace');
    const yearlyReplace = document.querySelectorAll('#replace');

    if (toggle.checked) {
      // Switch is checked (Yearly)
      monthlyReplace.forEach((element) => (element.style.display = 'none'));
      yearlyReplace.forEach((element) => (element.style.display = 'flex'));
    } else {
      // Switch is not checked (Monthly)
      monthlyReplace.forEach((element) => (element.style.display = 'flex'));
      yearlyReplace.forEach((element) => (element.style.display = 'none'));
    }
  }


  // Add click event listeners to the "Next" buttons
  nextButtons.forEach((button) => {
    button.addEventListener('click', handleNextClick);
  });

  // Add click event listeners to the "Go back" buttons
  backButton.forEach((button) => {
    button.addEventListener('click', handleBackClick);
  });

  // Add click event listeners to the sidebar buttons
  sidebarButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showPage(index);
    });
  });

  // Add change event listener to the switch
  toggle.addEventListener('change', handleSwitchToggle);

  // Initially, show the first page and hide the "Done" page
  showPage(0);
  donePage.style.display = 'none';

  // Call the toggle function initially to set the initial state
  handleSwitchToggle();

  const prageButtons = document.querySelectorAll('#prage');

  prageButtons.forEach(button => {
    let isToggled = false; // Initialize the toggle state

    button.addEventListener('click', function () {
      const iconCheckmark = button.querySelector('.icon-checkmark');
      
      // Toggle the background color
      if (isToggled) {
        // If it's toggled, change the background color back to the original state
        iconCheckmark.style.backgroundColor = 'darkgray'; // Replace with the original color
      } else {
        // If it's not toggled, change the background color to a different color
        iconCheckmark.style.backgroundColor = 'blue'; // Replace with the new color
      }

      // Toggle the state
      isToggled = !isToggled;
    });
  });
  function handlePlanButtonClick() {
    if (currentPageIndex < pages.length - 1) {
      showPage(currentPageIndex + 1);
    }
  }

  // Add click event listeners to the "Plan" buttons
  const planButtons = document.querySelectorAll('#plan');
  planButtons.forEach((button) => {
    button.addEventListener('click', handlePlanButtonClick);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const planButtons = document.querySelectorAll('.plan-type button'); // Select all plan buttons on page two
  const allFinDivs = document.querySelectorAll('.all-fin .fin'); // Select all divs in all-fin

  // Function to show a specific div in all-fin based on the button index
  function showFinDiv(index) {
    allFinDivs.forEach((div) => {
      div.style.display = 'none';
    });
    allFinDivs[index].style.display = 'flex';
  }

  // Add click event listeners to the plan buttons
  planButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showFinDiv(index);
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Page Two: Plan Buttons
  const planButtons = document.querySelectorAll('.plan-type button');

  // Page Two: Divs in .all-fin
  const allFinDivs = document.querySelectorAll('.all-fin .fin');

  // Function to show a specific div in .all-fin based on the button index
  function showFinDiv(index) {
    allFinDivs.forEach((div) => {
      div.style.display = 'none';
    });
    allFinDivs[index].style.display = 'flex';
  }

  // Add click event listeners to the plan buttons
  planButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showFinDiv(index);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Step 3: Select the buttons and Step 4: Select the divs
  const step3Buttons = document.querySelectorAll('#prage');
  const step4Divs = document.querySelectorAll('.typeofserivice');

  // Function to handle button click and show the corresponding div
  function handleButtonClick() {
      // Hide all Step 4 divs
      step4Divs.forEach((div) => {
          div.style.display = 'none';
      });

      // Find the buttons that are clicked
      const clickedButtons = [...step3Buttons].filter(button => button.classList.contains('clicked'));

      // Show the corresponding Step 4 divs for the clicked buttons
      clickedButtons.forEach((button) => {
          const index = [...step3Buttons].indexOf(button);
          step4Divs[index].style.display = 'flex';
      });
  }

  // Add click event listeners to the Step 3 buttons
  step3Buttons.forEach((button) => {
      button.addEventListener('click', () => {
          // Toggle the 'clicked' class when a button is clicked
          button.classList.toggle('clicked');
          handleButtonClick();
      });
  });
});



  document.addEventListener("DOMContentLoaded", function () {
    const monthlyReplaceElements = document.querySelectorAll('.replace');
    const yearlyReplaceElements = document.querySelectorAll('#replace');
    const toggle = document.getElementById('toggle');
    const totalFeeElement = document.querySelector('.total-fee');

    // Function to calculate the total fee
    function calculateTotalFee() {
      let totalFee = 0;

      // Calculate the total fee based on the selected plan
      const selectedPlanButton = document.querySelector('.plan-type button.selected');
      if (selectedPlanButton) {
        const feeElement = selectedPlanButton.querySelector('.replace');
        totalFee += parseFloat(feeElement.innerText.replace(/\$/g, ''));
      }

      // Calculate the total fee based on selected add-ons
      const selectedAddons = document.querySelectorAll('.add-ons.selected');
      selectedAddons.forEach((addon) => {
        const feeElement = addon.querySelector('.replace');
        totalFee += parseFloat(feeElement.innerText.replace(/\$/g, ''));
      });

      // Apply the yearly discount if the toggle is checked
      if (toggle.checked) {
        totalFee *= 12;
      }

      // Update the total fee on the page
      totalFeeElement.textContent = `$${totalFee.toFixed(2)}/yr`;
    }

    // Add click event listeners to the plan buttons
    const planButtons = document.querySelectorAll('.plan-type button');
    planButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove the "selected" class from all plan buttons
        planButtons.forEach((btn) => btn.classList.remove('selected'));

        // Add the "selected" class to the clicked plan button
        button.classList.add('selected');
        calculateTotalFee();
      });
    });

    // Add click event listeners to the add-ons buttons
    const addonButtons = document.querySelectorAll('.add-ons');
    addonButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Toggle the "selected" class on the clicked add-ons button
        button.classList.toggle('selected');
        calculateTotalFee();
      });
    });

    // Add change event listener to the toggle switch
    toggle.addEventListener('change', calculateTotalFee);

    // Initially, calculate the total fee based on the default selection
    calculateTotalFee();
  });
  

  
  document.addEventListener("DOMContentLoaded", function () {
    const sidebarButtons = document.querySelectorAll('.step');
    const pages = document.querySelectorAll('.page');
  
    // Function to show a specific page and disable appropriate sidebar buttons
    function showPage(index) {
      // Hide all pages
      pages.forEach((page, i) => {
        if (i === index) {
          page.style.display = 'flex';
        } else {
          page.style.display = 'none';
        }
      });
  
      // Disable appropriate sidebar buttons based on the current page
      sidebarButtons.forEach((button, i) => {
        button.disabled = (i !== index);
      });
    }
  
    // Add click event listeners to the sidebar buttons
    sidebarButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        showPage(index);
      });
    });
  
    // Initially show the first page
    showPage(0);
  });
  
 // Variables to track button click status
let pageTwoButtonClicked = false;
let pageThreeButtonClicked = false;

// Add event listeners to #plan buttons on page two
const pageTwoPlanButtons = document.querySelectorAll('#page-two [data-plan]');
pageTwoPlanButtons.forEach(button => {
    button.addEventListener('click', () => {
        pageTwoButtonClicked = true;
        enableNextButton();
    });
});

// Add event listeners to add-ons buttons on page three
const pageThreeAddonsButtons = document.querySelectorAll('#page-three button.add-ons');
pageThreeAddonsButtons.forEach(button => {
    button.addEventListener('click', () => {
        pageThreeButtonClicked = true;
        enableNextButton();
    });
});

// Function to enable/disable the Next button based on button click status
function enableNextButton() {
    const nextButton = document.querySelector('.Next');
    if (pageTwoButtonClicked || pageThreeButtonClicked) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', 'disabled');
    }
}
