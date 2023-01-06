`use strict`;

const bill = document.querySelector(".card__bill-input");
const selectTip = document.querySelectorAll(".select-tip__percentage");
const custom = document.querySelector(".custom-tip-input");
const numberOfPeople = document.querySelector(".number-of-people__value");
const tipInput = document.querySelector(".card2__tip-amount-value");
const totalInput = document.querySelector(".card2__total-value");
const reset = document.querySelector(".reset-btn");

reset.addEventListener("click", function () {
  bill.value = "0";
  custom.value = " ";
  numberOfPeople.value = "1";
  tipInput.innerHTML = "$0";
  totalInput.innerHTML = "$0";

  selectTip.forEach((tipBtn) => {
    tipBtn.classList.remove("active");
  });
  selectTip[2].classList.add("active");
});

selectTip.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    selectTip.forEach((tipBtn) => {
      tipBtn.classList.remove("active");
    });

    if (e.target.classList.contains("custom-tip-input")) {
      e.target.parentElement.classList.add("active");
    } else {
      e.target.classList.add("active");
    }

    calculateTip();
  });
});

const calculateTip = () => {
  const billValue = parseFloat(bill.value);
  const numberPeople = parseFloat(numberOfPeople.value);
  const customTipActive = document.querySelector(".select-tip-custom.active");
  let selectTip = parseInt(
    document.querySelector(".select-tip__percentage.active").dataset.percentage
  );

  if (customTipActive) {
    selectTip = parseFloat(document.querySelector(".custom-tip-input").value);
  }

  const totalAmount = parseFloat((selectTip / 100) * billValue).toFixed(2);
  const tipAmount = parseFloat(totalAmount / numberPeople).toFixed(2);
  const actualTotalAmount = parseFloat(
    (billValue + parseFloat(totalAmount)) / numberPeople
  ).toFixed(2);

  tipInput.innerHTML = `$${tipAmount}`;
  totalInput.innerHTML = `$${actualTotalAmount}`;
};

function removeHidden() {
  const numberPeople = parseFloat(numberOfPeople.value);
  let hidden = document.querySelector(".hidden");
  if (numberPeople === 0) {
    hidden.classList.remove("hidden");
  }
}
