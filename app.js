let total = 0;
let sampleCt = 0;
let sampleCt2 = 0;
document.addEventListener("DOMContentLoaded", () => {
  //Toggeling the plans
  const toggleSwitch = document.querySelector(".toggle input");
  const monthlyPrices = document.querySelectorAll(".monthly");
  const annuallyPrices = document.querySelectorAll(".annually");

  const month_h4 = document.getElementById("h4m");
  const year_h4 = document.getElementById("h4y");
  month_h4.style.color = "darkblue";

  const updatePriceDisplay = () => {
    if (toggleSwitch.checked) {
      year_h4.style.color = "darkblue";
      month_h4.style.color = "gray";
      monthlyPrices.forEach((price) => (price.style.display = "none"));
      annuallyPrices.forEach((price) => (price.style.display = "block"));
    } else {
      month_h4.style.color = "darkblue";
      year_h4.style.color = "gray";

      monthlyPrices.forEach((price) => (price.style.display = "block"));
      annuallyPrices.forEach((price) => (price.style.display = "none"));
    }
  };

  updatePriceDisplay();
  toggleSwitch.addEventListener("change", updatePriceDisplay);

  //changing pages by clicking next buttons
  const btn = document.querySelector("footer");
  const forms = document.querySelectorAll(".div-form");
  const container = document.querySelector(".container");
  const container2 = document.querySelector(".container2");
  const container3 = document.querySelector(".container3");
  const container4 = document.querySelector(".container4");
  const container5 = document.querySelector(".container5");
  const backBtn = document.querySelector(".back_btn");
  const nextBtn = document.querySelector(".next_btn");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  const btn3 = document.querySelector(".btn3");
  const btn4 = document.querySelector(".btn4");

  let ct = 1;
  let btnCt = 0;

  btn.addEventListener("click", function (e) {
    const target = e.target;

    if (target.matches(".next_btn") && ct == 1) {
      const check = allChecked();

      if (check) {
        btnManipulation(btn2, btn1);
        container.style.display = "none";
        container2.style.display = "block";
        ct++;
        btnCt++;
        if (btnCt == 0) {
          backBtn.style.visibility = "hidden";
        } else {
          backBtn.style.visibility = "visible";
        }
      }
    } else if (target.matches(".back_btn") && ct == 2) {
      backBtn.style.visibility = "visible";
      container.style.display = "block";
      container2.style.display = "none";
      btnManipulation(btn1, btn2);
      ct--;
      btnCt--;
      if (btnCt == 0) {
        backBtn.style.visibility = "hidden";
      } else {
        backBtn.style.visibility = "visible";
      }
    } else if (target.matches(".next_btn") && ct == 2) {
      container3.style.display = "block";
      container2.style.display = "none";
      btnManipulation(btn3, btn2);
      ct++;
    } else if (target.matches(".back_btn") && ct == 3) {
      container2.style.display = "block";
      container3.style.display = "none";
      btnManipulation(btn2, btn3);
      ct--;
    } else if (target.matches(".next_btn") && ct == 3) {
      container4.style.display = "block";
      container3.style.display = "none";
      btnManipulation(btn4, btn3);
      ct++;
      if (ct == 4) {
        nextBtn.textContent = "Confirm";
        nextBtn.style.backgroundColor = "var(--purplish-blue)";
      } else {
        nextBtn.textContent = "Next Step";
        nextBtn.style.backgroundColor = "var(--marine-blue)";
      }
    } else if (target.matches(".back_btn") && ct == 4) {
      container3.style.display = "block";
      container4.style.display = "none";
      btnManipulation(btn3, btn4);
      ct--;
      if (ct < 4) {
        nextBtn.textContent = "Next Step";
        nextBtn.style.backgroundColor = "var(--marine-blue)";
      }
    } else if (target.matches(".next_btn") && ct == 4) {
      container4.style.display = "none";
      container5.style.display = "block";

      btn.style.visibility = "hidden";
      backBtn.style.visibility = "hidden";
    }
  });

  function allChecked() {
    let checked = true;
    for (let i = 0; i < forms.length; i++) {
      const input = forms[i].querySelector("input");
      const error = forms[i].querySelector("label#error");

      if (input.value.trim() === "") {
        error.style.visibility = "visible";
        checked = false;
      } else {
        error.style.visibility = "hidden";
      }
    }

    return checked;
  }

  //function for btns manipulation
  function btnManipulation(button1, button2) {
    console.log("hai");
    button2.style.backgroundColor = "transparent";
    button2.style.color = "white";
    button1.style.backgroundColor = "skyblue";
    button1.style.color = "black";
  }

  //container2 plans selecting

  const options = document.querySelector(".options");
  const arcade = document.querySelector(".arcade");
  const advanced = document.querySelector(".advanced");
  const pro = document.querySelector(".pro");
  const priceMon = document.querySelectorAll(".pricesMon");
  const priceYr = document.querySelectorAll(".pricesYr");
  const heading = document.querySelector(".heading");
  const total = document.querySelector(".total");
  const totalSpan = document.querySelector(".total span");
  const headingName = document.querySelector(".heading h5");
  const headingPrice = document.querySelector(".heading span");
  const onlineSpan = document.querySelector(".online span");
  const storageSpan = document.querySelector(".local span");
  const profileSpan = document.querySelector(".customizedProfile span");

  options.addEventListener("click", function (e) {
    const target = e.target;

    function resetStyles() {
      [arcade, advanced, pro].forEach((el) => {
        el.style.borderColor = "grey";
        el.style.backgroundColor = "";
      });
    }

    if (target.matches(".arcade")) {
      resetStyles();
      arcade.style.borderColor = "blue";
      arcade.style.backgroundColor = "var(--light-blue)";
      headingName.textContent = "Arcade(Monthly)";
      heading.style.visibility = "visible";
      total.style.visibility = "visible";

      if (toggleSwitch.checked) {
        headingPrice.textContent = "$90/yr";
        sampleCt = 90;
      } else {
        headingPrice.textContent = "$9/mo";
        sampleCt = 9;
      }
    } else if (target.matches(".advanced")) {
      resetStyles();
      advanced.style.borderColor = "blue";
      advanced.style.backgroundColor = "var(--light-blue)";
      headingName.textContent = "Advanced(Monthly)";
      heading.style.visibility = "visible";
      total.style.visibility = "visible";

      if (toggleSwitch.checked) {
        headingPrice.textContent = "$120/yr";
        sampleCt = 120;
      } else {
        headingPrice.textContent = "$12/mo";
        sampleCt = 12;
      }
    } else if (target.matches(".pro")) {
      resetStyles();
      pro.style.borderColor = "blue";
      pro.style.backgroundColor = "var(--light-blue)";
      headingName.textContent = "Pro(Monthly)";
      heading.style.visibility = "visible";
      total.style.visibility = "visible";

      if (toggleSwitch.checked) {
        headingPrice.textContent = "$150/yr";
        sampleCt = 150;
      } else {
        headingPrice.textContent = "$15/mo";
        sampleCt = 15;
      }
    }

    if (target.matches(".toggle")) {
      const borderColor = target.checked ? "blue" : "grey";
      [arcade, advanced, pro].forEach((el) => {
        if (el.style.borderColor === "blue") {
          el.style.borderColor = borderColor;
        }
      });
    }

    if (toggleSwitch.checked) {
      priceMon.forEach((el) => (el.style.display = "none"));
      priceYr.forEach((el) => (el.style.display = "block"));
      onlineSpan.textContent = "+$10/yr";
      storageSpan.textContent = "+$20/yr";
      profileSpan.textContent = "+$20/yr";
    } else {
      priceMon.forEach((el) => (el.style.display = "block"));
      priceYr.forEach((el) => (el.style.display = "none"));
      onlineSpan.textContent = "+$1/mo";
      storageSpan.textContent = "+$2/mo";
      profileSpan.textContent = "+$2/mo";
    }

    totalSpan.textContent = toggleSwitch.checked
      ? `$${sampleCt + sampleCt2}/yr`
      : `$${sampleCt + sampleCt2}/mo`;
  });

  //container 3

  const addOptions = document.querySelector(".addOptions");
  const onlineService = document.querySelector(".onlineservices");
  const largestStorage = document.querySelector(".largerstorage");
  const profile = document.querySelector(".profile");
  const online = document.querySelector(".online");
  const storage = document.querySelector(".local");
  const customProfile = document.querySelector(".customizedProfile");

  addOptions.addEventListener("click", function (e) {
    const target = e.target;

    if (target.matches("#onlineServiceCheckbox")) {
      updateCheckBox(onlineService, online, 10, 1);
    }

    if (target.matches("#largerstorage") || target.matches("#profile")) {
      if (target.matches("#largerstorage")) {
        updateCheckBox(largestStorage, storage, 20, 2);
      } else {
        updateCheckBox(profile, customProfile, 20, 2);
      }
    }

    updateTotal();
  });

  function updateCheckBox(
    checkbox,
    displayElement,
    yearIncrement,
    monthIncrement
  ) {
    if (checkbox.style.borderColor === "blue") {
      checkbox.style.borderColor = "";
      checkbox.style.backgroundColor = "";
      displayElement.style.display = "none";
      sampleCt2 -= toggleSwitch.checked ? yearIncrement : monthIncrement;
    } else {
      checkbox.style.borderColor = "blue";
      checkbox.style.backgroundColor = "var(--light-blue)";
      displayElement.style.display = "block";
      sampleCt2 += toggleSwitch.checked ? yearIncrement : monthIncrement;
    }
  }

  function updateTotal() {
    const totalSpan = document.querySelector(".total span");
    totalSpan.textContent = toggleSwitch.checked
      ? `$${sampleCt + sampleCt2}/yr`
      : `$${sampleCt + sampleCt2}/mo`;
  }

  const change = document.querySelector("#change-btn");
  change.addEventListener("click", function (e) {
    const target = e.target;
    if (target.matches("#change-btn")) {
      container2.style.display = "block";
      container4.style.display = "none";
      nextBtn.textContent = "Next Step";
      nextBtn.style.backgroundColor = "var(--marine-blue)";
      btn2.style.backgroundColor = "skyblue";
      btn2.style.color = "black";

      btn4.style.backgroundColor = "transparent";
      btn4.style.color = "white";

      ct -= 2;
      btnCt = ct - 1;
    }
  });
});
