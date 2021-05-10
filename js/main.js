//blocking double selection
const blockDoubleSelection = (el) => {
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
  if (el.id == "to") {
    const rateCards = document.querySelectorAll(".rates-item");
    rateCards.forEach((card) => {
      card.classList.remove("selected-rate");
    });
    if (getOption.value !== "PLN") {
      document
        .querySelector(`#rates-item--${getOption.value}`)
        .classList.add("selected-rate");
    }
  }
};

// box.addEventListener("change", blockDoubleSelection(box))

fetch("https://api.nbp.pl/api/exchangerates/tables/c/?format=json")
  .then((response) => response.json())
  .then((data) => {
    data[0].rates.slice(0, 12).forEach((el) => {
      const renderRatesCards = () => {
        const temp = document.querySelector("#rates-item");
        const ratesList = document.querySelector(".rates-list");
        const clone = temp.content.cloneNode(true);
        const wrapper = clone.querySelector(".rates-item");
        const headerIcon = clone.querySelector(".rates-item__header-icon");
        const headerText = clone.querySelector(".rates-item__header-text");
        const codeText = clone.querySelector(".rates-item__code-text");
        const buyPrice = clone.querySelector(".buy-price");
        const sellPrice = clone.querySelector(".sell-price");
        wrapper.id = `rates-item--${el.code}`;
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
      };
      renderSelectOptions();
      renderRatesCards();
      localStorage.setItem(`${el.code}`, JSON.stringify(el));
    });
    const toSelect = document.getElementById("to");

    toSelect.selectedIndex = -1;

    const rateClickHandler = () => {
      const rateCards = document.querySelectorAll(".rates-item");
      rateCards.forEach((card) => {
        card.addEventListener("click", () => {
          const fromValue = document.querySelector("#from");
          if (fromValue.value !== card.id.slice(card.id.length - 3)) {
            rateCards.forEach((card) => {
              card.classList.remove("selected-rate");
            });
            const clickedCurr = card.querySelector(".rates-item__code-text")
              .innerHTML;
            toSelect.value = clickedCurr;
            card.classList.add("selected-rate");
          }
          blockDoubleSelection(toSelect)
        });
      });
    };

    rateClickHandler();
  });

const selectElClickHandler = () => {
  const selectElements = document.querySelectorAll("select");
  selectElements.forEach((el) => {
    el.addEventListener("change", () => {
      blockDoubleSelection(el);
    });
  });
};
selectElClickHandler()

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

const submitForm = () => {
  const resultEl = document.querySelector(".result");
  const formEl = document.querySelector(".form-converter");
  const amountEl = document.querySelector("#amount");
  const fromEl = document.querySelector("#from");
  const toEl = document.querySelector("#to");
  formEl.addEventListener("submit", (e) => {
    const displayResult = (
      amount,
      from,
      to,
      buyTransactionValue,
      sellTransactionValue
    ) => {
      resultEl.style.opacity = 0;
      setTimeout(() => {
        if (from == "PLN" || to === "PLN") {
          resultEl.innerHTML = `<p> Za <span class="amount-info">${amount}${from}</span> otrzymasz <span class="amount-info">${sellTransactionValue}${to}</span></p>`;
        } else {
          resultEl.innerHTML = `<p>Za <span class="amount-info">${amount}${from}</span> otrzymasz <span class="amount-info">${buyTransactionValue}PLN</span>, które następnie wymienimy na <span class="amount-info">${sellTransactionValue}${to}</span></p>`;
          // <p>${amount} ${from}  ${buyTransactionValue} ${sellTransactionValue}${to}</p>
        }
        resultEl.style.opacity = 1;
      }, 500);
    };
    e.preventDefault();
    const amount = amountEl.value;
    const fromElValue =
      fromEl.value === "PLN"
        ? 1
        : JSON.parse(localStorage.getItem(fromEl.value)).bid;
    const toElValue =
      toEl.value === "PLN" ? 1 : JSON.parse(localStorage.getItem(to.value)).ask;
    const buyTransactionValue = Math.round(amount * fromElValue * 100) / 100;
    const sellTransactionValue =
      Math.round((buyTransactionValue / toElValue) * 100) / 100;
    displayResult(
      amount,
      fromEl.value,
      toEl.value,
      buyTransactionValue,
      sellTransactionValue
    );
  });
};
submitForm();
