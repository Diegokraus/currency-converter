const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.06;
const euro = 5.56;
const bitcoin = 141835.09;

const convertValues = () => {
  const inputReal = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = currencyValueText.innerHTML = new Intl.NumberFormat(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  ).format(inputReal);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }

  if (select.value === "₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("XBT", {
      style: "currency",
      currency: "BTC",
    }).format(inputReal / bitcoin);
  }
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/images/usa.svg";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/images/euro.svg";
  }

  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/images/bitcoin.png";
  }

  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
