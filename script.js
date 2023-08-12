document.addEventListener("DOMContentLoaded", function() {
  const donationButton = document.getElementById("donation-button");
  const amountRaisedElement = document.getElementById("amount-raised");
  const donationAmountInput = document.getElementById("donation-amount");
  const donationFormSection = document.querySelector(".donation-form");

  // Get the previously saved amount from localStorage
  const savedAmount = parseFloat(localStorage.getItem("amountRaised")) || 0;
  amountRaisedElement.textContent = savedAmount.toLocaleString("uk-UA") + " грн";

  donationButton.addEventListener("click", function() {
      const donatedAmount = parseFloat(donationAmountInput.value);
      if (!isNaN(donatedAmount)) {
          const currentAmountRaised = parseFloat(amountRaisedElement.textContent.replace(/\s+/g, "")) || 0;
          const newAmountRaised = currentAmountRaised + donatedAmount;

          localStorage.setItem("amountRaised", newAmountRaised);

          amountRaisedElement.textContent = newAmountRaised.toLocaleString("uk-UA") + " грн";

          donationAmountInput.value = "";

          if (newAmountRaised >= 8999) {
              donationFormSection.innerHTML = "<p>Збір завершено</p>";
          }
      }
  });
});

function showThankYou() {
  console.log("showThankYou function called");
  var alertStyle = "background-color: #f7f7f7; border: 1px solid #ddd; padding: 15px; text-align: center; font-size: 18px; font-weight: bold;";
  var thankYouMessage = "Дякуємо за ваш донат! Ваша підтримка дуже важлива для нас!";
  var alertElement = document.createElement("div");
  alertElement.style = alertStyle;
  alertElement.innerHTML = thankYouMessage;
  document.body.appendChild(alertElement);
  setTimeout(function() {
      document.body.removeChild(alertElement);
  }, 3000);
}

