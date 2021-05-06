fetch("https://api.nbp.pl/api/exchangerates/tables/c/?format=json")
  .then((response) => response.json())
  .then((data) => {
    data[0].rates.slice(0, 12).forEach((el) => {
      const renderRatesCards = () => {
        const temp = document.querySelector("#rates-item");
        const ratesList = document.querySelector(".rates-list");
        const clone = temp.content.cloneNode(true);
        const headerIcon = clone.querySelector(".rates-item__header-icon");
        const headerText = clone.querySelector(".rates-item__header-text");
        const codeText = clone.querySelector(".rates-item__code-text");
        const buyPrice = clone.querySelector(".buy-price");
        const sellPrice = clone.querySelector(".sell-price");
        headerIcon.src = `./img/flags/1x1/${el.code.toLowerCase()}.svg`;
        headerText.innerText = el.currency;
        codeText.innerText = el.code;
        buyPrice.innerText = el.bid;
        sellPrice.innerText = el.ask;
        ratesList.appendChild(clone);
      };
      const renderSelectOptions = () => {
        const selectBoxes = document.querySelectorAll("select");
        selectBoxes.forEach((box) => {
          const temp = document.querySelector("#select-option");
          const clone = temp.content.cloneNode(true);
          const cloneOpt = clone.querySelector(".form-converter__option");
          cloneOpt.innerText = el.code;
          cloneOpt.value = el.code;
        
          box.appendChild(clone);
        });

        // ratesList.appendChild(clone);
      };
      renderSelectOptions();
      renderRatesCards();
    });
    document.getElementById("to").selectedIndex = -1;
  });

//disabling double selection
const disableDoubleSelection = () => {
  const selectElements = document.querySelectorAll("select");
  selectElements.forEach((el) => {
    el.addEventListener("change", () => {
      const getSelect = el.id === "from" ? "to" : "from";
      const getOption = document.querySelector(
        `#${getSelect} option[value="${el.selectedOptions[0].value}"]`
      );
      document.querySelectorAll(`#${getSelect} option`).forEach((opt) => {
        opt.disabled = false;
        opt.classList.remove("disabled");
      });
      getOption.classList.add("disabled");
      getOption.disabled = true;
    });
  });
};

disableDoubleSelection();

//number validation
function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}


const toggleNavigation = () => {
  const toggleShowClass = () => {
    elementsList = [".nav-menu", ".branding", ".menuToggle"];
    elementsList.forEach((el) => {
      const element = document.querySelector(el);
      element.classList.toggle("show");
    });
  };
  const toggleBtn = document.querySelector(".menuToggle");
  const navMenu = document.querySelector(".nav-menu");
  toggleBtn.addEventListener("click", toggleShowClass);
  navMenu.addEventListener("click", toggleShowClass);
};

toggleNavigation();