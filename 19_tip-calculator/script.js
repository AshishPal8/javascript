const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const button = document.getElementById("calculate");
const totalAmount = document.getElementById("total");

function calculateBillAmount() {
  const billValue = billInput.value;
  const tipValueInPercentage = 1 + tipInput.value / 100;
  const TotalValue = billValue * tipValueInPercentage;
  totalAmount.innerText = Math.floor(TotalValue);
}

button.addEventListener("click", calculateBillAmount);
