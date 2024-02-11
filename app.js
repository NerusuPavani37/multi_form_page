let total = 0;
let sampleCt = 0;
let sampleCt2 = 0;
document.addEventListener("DOMContentLoaded", () => {
  //Toggeling the plans
  document.getElementById("h4m").style.color = "darkblue";

  const updatePriceDisplay = () => {
    if (document.querySelector(".toggle input").checked) {
      document.getElementById("h4y").style.color = "darkblue";
      document.getElementById("h4m").style.color = "gray";
      document.querySelectorAll(".monthly").forEach((price) => (price.style.display = "none"));
      document.querySelectorAll(".annually").forEach((price) => (price.style.display = "block"));
    } else {
      document.getElementById("h4m").style.color = "darkblue";
      document.getElementById("h4y").style.color = "gray";

      document.querySelectorAll(".monthly").forEach((price) => (price.style.display = "block"));
      document.querySelectorAll(".annually").forEach((price) => (price.style.display = "none"));
    }
  };

  updatePriceDisplay();
  document.querySelector(".toggle input").addEventListener("change", updatePriceDisplay);

  //changing pages by clicking next buttons
  let ct = 1;
  let btnCt = 0;

  document.querySelector("footer").addEventListener("click", function (e) {
    const target = e.target;
    if (target.matches(".next_btn") && ct == 1) {
      const check = allChecked();

      if (check) {
        btnManipulation(
          document.querySelector(".btn2"),
          document.querySelector(".btn1")
        );
        document.querySelector(".container").style.display = "none";
        document.querySelector(".container2").style.display = "block";
        ct++;
        btnCt++;
        if (btnCt == 0) {
          document.querySelector(".back_btn").style.visibility = "hidden";
        } else {
          document.querySelector(".back_btn").style.visibility = "visible";
        }
      }
    } else if (target.matches(".back_btn") && ct == 2) {
      document.querySelector(".back_btn").style.visibility = "visible";
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container2").style.display = "none";
      btnManipulation(
        document.querySelector(".btn1"),
        document.querySelector(".btn2")
      );
      ct--;
      btnCt--;
      if (btnCt == 0) {
        document.querySelector(".back_btn").style.visibility = "hidden";
      } else {
        document.querySelector(".back_btn").style.visibility = "visible";
      }
    } else if (target.matches(".next_btn") && ct == 2) {
      document.querySelector(".container3").style.display = "block";
      document.querySelector(".container2").style.display = "none";
      btnManipulation(
        document.querySelector(".btn3"),
        document.querySelector(".btn2")
      );
      ct++;
    } else if (target.matches(".back_btn") && ct == 3) {
      document.querySelector(".container2").style.display = "block";
      document.querySelector(".container3").style.display = "none";
      btnManipulation(
        document.querySelector(".btn2"),
        document.querySelector(".btn3")
      );
      ct--;
    } else if (target.matches(".next_btn") && ct == 3) {
      document.querySelector(".container4").style.display = "block";
      document.querySelector(".container3").style.display = "none";
      btnManipulation(
        document.querySelector(".btn4"),
        document.querySelector(".btn3")
      );
      ct++;
      if (ct == 4) {
        document.querySelector(".next_btn").textContent = "Confirm";
        document.querySelector(".next_btn").style.backgroundColor =
          "var(--purplish-blue)";
      } else {
        document.querySelector(".next_btn").textContent = "Next Step";
        document.querySelector(".next_btn").style.backgroundColor =
          "var(--marine-blue)";
      }
    } else if (target.matches(".back_btn") && ct == 4) {
      document.querySelector(".container3").style.display = "block";
      document.querySelector(".container4").style.display = "none";
      btnManipulation(
        document.querySelector(".btn3"),
        document.querySelector(".btn4")
      );
      ct--;
      if (ct < 4) {
        document.querySelector(".next_btn").textContent = "Next Step";
        document.querySelector(".next_btn").style.backgroundColor =
          "var(--marine-blue)";
      }
    } else if (target.matches(".next_btn") && ct == 4) {
      document.querySelector(".container4").style.display = "none";
      document.querySelector(".container5").style.display = "block";

      document.querySelector("footer").style.visibility = "hidden";
      document.querySelector(".back_btn").style.visibility = "hidden";
    }
  });

  const forms = document.querySelectorAll(".div-form");
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
    button2.style.backgroundColor = "transparent";
    button2.style.color = "white";
    button1.style.backgroundColor = "skyblue";
    button1.style.color = "black";
  }

  //container2 plans selecting
  document.querySelector(".options").addEventListener("click", function (e) {
    const target = e.target;
    function resetStyles() {
      [
        document.querySelector(".arcade"),
        document.querySelector(".advanced"),
        document.querySelector(".pro"),
      ].forEach((el) => {
        el.style.borderColor = "grey";
        el.style.backgroundColor = "";
      });
    }

    if (target.matches(".arcade")) {
      resetStyles();
      document.querySelector(".arcade").style.borderColor = "blue";
      document.querySelector(".arcade").style.backgroundColor =
        "var(--light-blue)";
      document.querySelector(".heading h5").textContent = "Arcade(Monthly)";
      document.querySelector(".heading").style.visibility = "visible";
      document.querySelector(".total").style.visibility = "visible";

      if (document.querySelector(".toggle input").checked) {
        document.querySelector(".heading span").textContent = "$90/yr";
        sampleCt = 90;
      } else {
        document.querySelector(".heading span").textContent = "$9/mo";
        sampleCt = 9;
      }
    } else if (target.matches(".advanced")) {
      resetStyles();
      document.querySelector(".advanced").style.borderColor = "blue";
      document.querySelector(".advanced").style.backgroundColor =
        "var(--light-blue)";
      document.querySelector(".heading h5").textContent = "Advanced(Monthly)";
      document.querySelector(".heading").style.visibility = "visible";
      document.querySelector(".total").style.visibility = "visible";

      if (document.querySelector(".toggle input").checked) {
        document.querySelector(".heading span").textContent = "$120/yr";
        sampleCt = 120;
      } else {
        document.querySelector(".heading span").textContent = "$12/mo";
        sampleCt = 12;
      }
    } else if (target.matches(".pro")) {
      resetStyles();
      document.querySelector(".pro").style.borderColor = "blue";
      document.querySelector(".pro").style.backgroundColor =
        "var(--light-blue)";
      document.querySelector(".heading h5").textContent = "Pro(Monthly)";
      document.querySelector(".heading").style.visibility = "visible";
      document.querySelector(".total").style.visibility = "visible";

      if (document.querySelector(".toggle input").checked) {
        document.querySelector(".heading span").textContent = "$150/yr";
        sampleCt = 150;
      } else {
        document.querySelector(".heading span").textContent = "$15/mo";
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
   
    if (document.querySelector(".toggle input").checked) {
      document.querySelectorAll(".pricesMon").forEach((el) => (el.style.display = "none"));
      document.querySelectorAll(".pricesYr").forEach((el) => (el.style.display = "block"));
      document.querySelector(".online span").textContent = "+$10/yr";
      document.querySelector(".local span").textContent = "+$20/yr";
      document.querySelector(".customizedProfile span").textContent = "+$20/yr";
    } else {
      document.querySelectorAll(".pricesMon").forEach((el) => (el.style.display = "block"));
      document.querySelectorAll(".pricesYr").forEach((el) => (el.style.display = "none"));
      document.querySelector(".online span").textContent = "+$1/mo";
      document.querySelector(".local span").textContent = "+$2/mo";
      document.querySelector(".customizedProfile span").textContent = "+$2/mo";
    }


    document.querySelector(".total span").textContent = document.querySelector(".toggle input").checked
      ? `$${sampleCt + sampleCt2}/yr`
      : `$${sampleCt + sampleCt2}/mo`;
  });

  //container 3
  document.querySelector(".addOptions").addEventListener("click", function (e) {
    const target = e.target;
    if (target.matches("#onlineServiceCheckbox")) {
      updateCheckBox(
        document.querySelector(".onlineservices"),
        document.querySelector(".online"),
        10,
        1
      );
    }

    if (target.matches("#largerstorage") || target.matches("#profile")) {
      if (target.matches("#largerstorage")) {
        updateCheckBox(
          document.querySelector(".largerstorage"),
          document.querySelector(".local"),
          20,
          2
        );
      } else {
        updateCheckBox(
          document.querySelector(".profile"),
          document.querySelector(".customizedProfile"),
          20,
          2
        );
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
      sampleCt2 -= tdocument.querySelector(".toggle input").checked ? yearIncrement : monthIncrement;
    } else {
      checkbox.style.borderColor = "blue";
      checkbox.style.backgroundColor = "var(--light-blue)";
      displayElement.style.display = "block";
      sampleCt2 += document.querySelector(".toggle input").checked ? yearIncrement : monthIncrement;
    }
  }

  function updateTotal() {
    document.querySelector(".total span").textContent = tdocument.querySelector(".toggle input").checked
      ? `$${sampleCt + sampleCt2}/yr`
      : `$${sampleCt + sampleCt2}/mo`;
  }

  document.querySelector("#change-btn").addEventListener("click", function (e) {
    const target = e.target;
    if (target.matches("#change-btn")) {
      document.querySelector(".container2").style.display = "block";
      document.querySelector(".container4").style.display = "none";
      document.querySelector(".next_btn").textContent = "Next Step";
      document.querySelector(".next_btn").style.backgroundColor =
        "var(--marine-blue)";
      document.querySelector(".btn2").style.backgroundColor = "skyblue";
      document.querySelector(".btn2").style.color = "black";
      document.querySelector(".btn4").style.backgroundColor = "transparent";
      document.querySelector(".btn4").style.color = "white";

      ct -= 2;
      btnCt = ct - 1;
    }
  });
});
