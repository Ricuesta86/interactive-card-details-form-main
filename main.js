// Nombre
let nameInput = document.querySelector("#cardholder");
let nameCard = document.querySelector(".card__details-name");
let nameError = document.querySelector(".form__input-cardholder--error");

//Número
let numberInput = document.querySelector("#cardnumber");
let numberCard = document.querySelector(".card__number");
let numberError = document.querySelector(".form__input-cardnumber--error");

//Mes
let monthInput = document.querySelector("#cardmonth");
let monthCard = document.querySelector(".card__details-date-month");
let monthError = document.querySelector(".form__input-mm--error");

//Año
let yearInput = document.querySelector("#cardyear");
let yearCard = document.querySelector(".card__details-date-year");
let yearError = document.querySelector(".form__input-yy--error");
//CVC
let cvcInput = document.querySelector("#cardcvc");
let cvcCard = document.querySelector(".card-back__cvc");
let cvcError = document.querySelector(".form__input-cvc--error");

//Confirm
let confirmBtn = document.querySelector(".form__submit");

//Thanks Section
let thanksSection= document.querySelector('.thanks-section');

// Form
let formSection = document.querySelector('.main-container__form-section');

//Escuchando el evento input del nombre
nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    nameCard.innerText = "JANE APPLESEED";
  } else {
    nameCard.innerText = nameInput.value;
  }
});

//Escuchando el evento input del número
numberInput.addEventListener("input", (event) => {
  let inputValue = event.target.value;

  numberCard.innerText = numberInput.value;

  let regExp = /[A-z]/g;
  if (regExp.test(numberInput.value)) {
    showError(numberInput, numberError, "Wrong format, numbers only");
  } else {
    numberInput.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
    hideError(numberInput, numberError);
  }

  if (numberInput.value === "") {
    numberCard.innerText = "0000 0000 0000 0000";
  }
});

monthInput.addEventListener("input", () => {
  if (monthInput.value > 0 && monthInput.value <= 12) {
    monthCard.innerText = monthInput.value;
    hideError(monthInput, monthError);
  } else {
    if(!validateLetters(monthInput,monthError)){
      showError(monthInput, monthError, "Month incorrect");
    }
  }

  if (monthInput.value === "") {
    monthInput.innerText = "00";
    hideError(monthInput, monthError);
  }
});

yearInput.addEventListener("input", () => {
  if (yearInput.value > 22 && yearInput.value <= 27) {
    yearCard.innerText = yearInput.value;
    hideError(yearInput, yearError);
  } else {
    if (!validateLetters(yearInput, yearError)) {
      showError(yearInput, yearError, "year incorrect");
    }
  }
  if (yearInput.value === "") {
    yearInput.innerText = "00";
    hideError(yearInput, yearError);
  }
});
cvcInput.addEventListener("input", () => {
  if (cvcInput.value.length === 3) {
    cvcCard.innerText = cvcInput.value;
    hideError(cvcInput, cvcError);
  } else {
    if (!validateLetters(cvcInput, cvcError)) {
      showError(cvcInput, cvcError, "cvc incorrect");
    }
  }
  if (cvcInput.value === "") {
    cvcInput.innerText = "000";
    hideError(cvcInput, cvcError);
  }
});


confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let name = verifyIsFilled(nameInput, nameError);
  let number = verifyIsFilled(numberInput, numberError);
  let month = verifyIsFilled(monthInput, monthError);
  let year = verifyIsFilled(yearInput, yearError);
  let cvc = verifyIsFilled(cvcInput, cvcError); 
  if(name && number && month && year && cvc){
    thanksSection.style.display="block";
    formSection.style.display="none";
  }
});

// Funciones para trabajar los errores
function showError(divInput, divError, msgError) {
  divError.innerText = msgError;
  divInput.style.borderColor = "#ff0000";
}

function hideError(divInput, divError) {
  divError.innerText = "";
  divInput.style.borderColor = "hsl(279, 6%, 55%)";
}

function verifyIsFilled(divInput, divError) {
  if (divInput.value.length > 0) {
    hideError(divInput, divError);
    return true;
  } else {
    showError(divInput, divError, "Can't be black");
    return false;
  }
}

function validateLetters(divInput, divError) {
  let regExp = /[A-z]/g;
  if (regExp.test(divInput.value)) {
    showError(divInput, divError, "Wrong format, numbers only");
    return true;
  } else {
    hideError(divInput, divError);
    return false;
  }
}
