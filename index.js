const loanForm = document.querySelector("#loan-form");
const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const calculateBtn = document.querySelector(".btn");
const monthlyPayment = document.querySelector("#monthly-payment");
const totalPayment = document.querySelector("#total-payment");
const totalInterestt = document.querySelector("#total-interest");

loanForm.addEventListener("submit", calculate);
function calculate(e) {
  console.log("calculating.....");
  const princible = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (x * princible * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - princible).toFixed(2);
  } else {
    console.log("Please chec your number");
  }

  e.preventDefault();
}
