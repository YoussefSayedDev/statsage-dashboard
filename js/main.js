// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Select all main accordion items
  const accordionItems = document.querySelectorAll(".accordion > .accordion-item");

  // Select all sub-accordion items
  const subAccordionItems = document.querySelectorAll(".sub-accordion > .accordion-item");

  // Select all elements that act as accordion toggles
  const accordionToggle = document.querySelectorAll(".accordion-toggle");

  // Add click event listener to each accordion toggle
  accordionToggle.forEach((one) => {
    one.addEventListener("click", (e) => {

      // Remove All Active Classes from accordions
      removeAllActiveClasses(e);

      // Find the sibling of the clicked toggle
      const accordionSibling = one.parentElement.nextElementSibling;

      // Toggle the 'active' class based on current state
      if (accordionSibling.classList.contains("active")) {
        accordionSibling.classList.remove("active");
        one.parentElement.classList.remove("open");

        // Collapse nested accordions if present
        for (let i = 0; i < accordionSibling.children.length; i++) {
          for (let j = 0; j < accordionSibling.children[i].children.length; j++) {
            if (accordionSibling.children[i].children[j].children[1]) {
              accordionSibling.children[i].children[j].children[1].classList.remove("active");
              one.style.cssText = "transform: rotate(0deg)";
            }
          }
        }
      } else {
        accordionSibling.classList.add("active");
        one.parentElement.classList.add("open");
        one.style.cssText = "transform: rotate(90deg)";
      }
    });
  });

  // Function to remove all active classes
  const removeAllActiveClasses = (selector) => {

    // Remove active classes from main accordion items
    removeFromAccordionItems(selector);

    // Remove active classes from sub-accordion items
    removeFromSubAccordionItems(selector);

  };

  // Function to remove active classes from main accordion items
  const removeFromAccordionItems = (btnArrow) => {
    accordionItems.forEach((item) => {
      // Find the parent of the clicked accordion item
      const currentAccordionItem = btnArrow.target.parentElement.parentElement.parentElement;
      const parentCurrentAccordionItem = currentAccordionItem.parentElement.parentElement.parentElement;

      // Remove active classes from items other than the clicked one
      if (item !== currentAccordionItem && item !== parentCurrentAccordionItem) {
        if (item.children[1]) {
          item.children[1].classList.remove("active");
          item.children[0].classList.remove("open");

          // Reset accordion toggle styles
          accordionToggle.forEach((toggle) => {
            if (toggle !== parentCurrentAccordionItem.children[0].children[2]) {
              toggle.style.cssText = "transform: rotate(0deg)";
            }
          });
        }
      }
    });
  };

  // Function to remove active classes from sub-accordion items
  const removeFromSubAccordionItems = (btnArrow) => {
    const currentAccordionItem = btnArrow.target.parentElement.parentElement.parentElement;
    const parentCurrentAccordionItem = currentAccordionItem.parentElement.parentElement.parentElement;

    subAccordionItems.forEach((subItem) => {
      if (subItem !== currentAccordionItem) {
        if (subItem.children[1]) {
          subItem.children[1].classList.remove("active");
          subItem.children[0].classList.remove("open");

          // Reset accordion toggle styles
          accordionToggle.forEach((toggle) => {
            if (toggle !== parentCurrentAccordionItem.children[0].children[2]) {
              toggle.style.cssText = "transform: rotate(0deg)";
            }
          });
        }
      }
    });
  };


  // Add click event listener to translate button
  const btnTranslate = document.querySelector(".tran-icon i");
  const optionsLanguages = document.querySelector(".select-lang");
  
  btnTranslate.addEventListener("click", () => {
    btnTranslate.parentElement.classList.toggle("active");
    optionsLanguages.classList.toggle("open");
  });

  // Close language options if click occurs outside the translate button
  document.addEventListener("click", (e) => {
    if (!e.target.parentElement.classList.contains("tran-icon")) {
      btnTranslate.parentElement.classList.remove("active");
      optionsLanguages.classList.remove("open");
    }
  });

    // Add click event listener to mode button
    const btnMode = document.querySelector(".mode-icon i");
    const optionsMode = document.querySelector(".select-mode");


    btnMode.addEventListener("click", () => {
      btnMode.parentElement.classList.toggle("active");
      optionsMode.classList.toggle("open");
    });


    // Close language options if click occurs outside the translate button
    document.addEventListener("click", (e) => {
      if (!e.target.parentElement.classList.contains("mode-icon")) {
        btnMode.parentElement.classList.remove("active");
        optionsMode.classList.remove("open");
      }
    });



    // Add click event listener to mode button
    const btnShortcuts = document.querySelector(".shortcuts-icon i");
    const optionsShortcuts = document.querySelector(".select-shortcuts");


    btnShortcuts.addEventListener("click", () => {
      btnShortcuts.parentElement.classList.toggle("active");
      optionsShortcuts.classList.toggle("open");
    });


    // Close language options if click occurs outside the translate button
    document.addEventListener("click", (e) => {
      if (!e.target.parentElement.classList.contains("shortcuts-icon")) {
        btnShortcuts.parentElement.classList.remove("active");
        optionsShortcuts.classList.remove("open");
      }
    });


    // Add click event listener to bell button
    const btnBell = document.querySelector(".bell-icon i");
    const optionsBell = document.querySelector(".select-bell");


    btnBell.addEventListener("click", () => {
      btnBell.parentElement.classList.toggle("active");
      optionsBell.classList.toggle("open");
    });


    // Close notification options if click occurs outside the bell button
    document.addEventListener("click", (e) => {
      if (!e.target.parentElement.classList.contains("bell-icon")) {
        btnBell.parentElement.classList.remove("active");
        optionsBell.classList.remove("open");
      }
    });



    // Add click event listener to more button Vehicles Overview 
    const btnMoreOverview = document.querySelector(".vehicles-overview .more-icon i");
    const optionsMoreOverview = document.querySelector(".vehicles-overview .select-more");


    btnMoreOverview.addEventListener("click", () => {
      btnMoreOverview.parentElement.classList.toggle("active");
      optionsMoreOverview.classList.toggle("open");
    });


    // Close more options if click occurs outside the more button
    document.addEventListener("click", (e) => {
      if (!e.target.parentElement.classList.contains("more-icon")) {
        btnMoreOverview.parentElement.classList.remove("active");
        optionsMoreOverview.classList.remove("open");
      }
    });


      // Add click event listener to more button Delivery Performance
      const btnMorePreform = document.querySelector(".delivery-performance .more-icon i");
      const optionsMorePreform = document.querySelector(".delivery-performance .select-more");
  
  
      btnMorePreform.addEventListener("click", () => {
        btnMorePreform.parentElement.classList.toggle("active");
        optionsMorePreform.classList.toggle("open");
      });
  
  
      // Close more options if click occurs outside the more button
      document.addEventListener("click", (e) => {
        if (!e.target.parentElement.classList.contains("more-icon")) {
          btnMorePreform.parentElement.classList.remove("active");
          optionsMorePreform.classList.remove("open");
        }
      });



      // Add click event listener to more button Reasons for delivery exceptions
      const btnMoreReasons = document.querySelector(".reasons-delivery .more-icon i");
      const optionsMoreReasons = document.querySelector(".reasons-delivery .select-more");
  
  
      btnMoreReasons.addEventListener("click", () => {
        btnMoreReasons.parentElement.classList.toggle("active");
        optionsMoreReasons.classList.toggle("open");
      });
  
  
      // Close more options if click occurs outside the more button
      document.addEventListener("click", (e) => {
        if (!e.target.parentElement.classList.contains("more-icon")) {
          btnMoreReasons.parentElement.classList.remove("active");
          optionsMoreReasons.classList.remove("open");
        }
      });



      // Add click event listener to more button Orders by Countries
      const btnMoreOrders = document.querySelector(".orders-countries .more-icon i");
      const optionsMoreOrders = document.querySelector(".orders-countries .select-more");
  
  
      btnMoreOrders.addEventListener("click", () => {
        btnMoreOrders.parentElement.classList.toggle("active");
        optionsMoreOrders.classList.toggle("open");
      });
  
  
      // Close more options if click occurs outside the more button
      document.addEventListener("click", (e) => {
        if (!e.target.parentElement.classList.contains("more-icon")) {
          btnMoreOrders.parentElement.classList.remove("active");
          optionsMoreOrders.classList.remove("open");
        }
      });


      // Add click event listener to more button On route vehicles
      const btnMoreRoute = document.querySelector(".route-vehicles .more-icon i");
      const optionsMoreRoute = document.querySelector(".route-vehicles .select-more");
  
  
      btnMoreRoute.addEventListener("click", () => {
        btnMoreRoute.parentElement.classList.toggle("active");
        optionsMoreRoute.classList.toggle("open");
      });
  
  
      // Close more options if click occurs outside the more button
      document.addEventListener("click", (e) => {
        if (!e.target.parentElement.classList.contains("more-icon")) {
          btnMoreRoute.parentElement.classList.remove("active");
          optionsMoreRoute.classList.remove("open");
        }
      });



    // Add click event listener to month button
    const btnMonths = document.querySelector(".month-icon i");
    const optionsMonths = document.querySelector(".select-month");


    btnMonths.addEventListener("click", () => {
      btnMonths.parentElement.classList.toggle("active");
      optionsMonths.classList.toggle("open");
    });


    // Close month options if click occurs outside the month button
    document.addEventListener("click", (e) => {
      if (!e.target.parentElement.classList.contains("month-icon")) {
        btnMonths.parentElement.classList.remove("active");
        optionsMonths.classList.remove("open");
      }
    });
    

    // Toggle Navbar
    const btnToggleNavbar = document.querySelector('.toggle-navbar');
    const theSidebar = document.querySelector(".sidebar");
    const theContainer = document.querySelector(".sidebar > .container");
    const menuToggle = document.querySelector('.menu-toggle.dot');
    const theCloseIcon = document.querySelector('.logo .close');

    btnToggleNavbar.addEventListener('click', () => {
      theSidebar.classList.add('toggleClass');
      theContainer.classList.add('toggleClass');
      menuToggle.classList.remove('active')
      theCloseIcon.classList.add('active')
    });

    theCloseIcon.addEventListener('click', () => {
      theSidebar.classList.remove('toggleClass');
      theContainer.classList.remove('toggleClass');
      menuToggle.classList.add('active')
      theCloseIcon.classList.remove('active')
    });
});

