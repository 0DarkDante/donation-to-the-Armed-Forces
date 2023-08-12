document.addEventListener("DOMContentLoaded", function() {
  const donationButton = document.getElementById("donation-button");
  const amountRaisedElement = document.getElementById("amount-raised");
  const donationAmountInput = document.getElementById("donation-amount");
  const donationFormSection = document.querySelector(".donation-form");

  // Оновлена частина: Встановлюємо початкове значення "Зібрано коштів" в локальному сховищі
  const initialAmountRaised = 5580;
  localStorage.setItem("amountRaised", initialAmountRaised);

  // Встановлюємо початкове значення "Зібрано коштів" на сторінці
  amountRaisedElement.textContent = initialAmountRaised.toLocaleString("uk-UA") + " грн";

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

          // Додаємо алерт з подякою за донат
          showThankYouAlert();
      }
  });

  // Функція для показу алерту з подякою
  function showThankYouAlert() {
      const thankYouMessage = "Дякуємо за ваш донат! Ваша підтримка дуже важлива для нас!";
      const alertElement = document.createElement("div");
      alertElement.classList.add("thank-you-alert");
      alertElement.textContent = thankYouMessage;
      document.body.appendChild(alertElement);
      setTimeout(function() {
          document.body.removeChild(alertElement);
      }, 3000);
  }
});