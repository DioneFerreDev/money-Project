document.addEventListener("DOMContentLoaded", playMoney())


function playMoney() {
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then(res => res.json())
        .then(wallet => moneyNow(wallet))
}
function moneyNow(wallet) {
    const dolar = wallet.USDBRL;
    const euro = wallet.EURBRL;
    const boxAmount = document.getElementById("amount");
    const boxCurrency = document.getElementById("currency");
    let quantiny = boxAmount.value;
    let currency = boxCurrency.value;
    let calcMoney = 0;
    console.log(wallet)

    // montando as options    
    let optionDolar = document.createElement("option");
    let optionEuro = document.createElement("option");
    optionDolar.innerHTML = dolar.name;
    optionDolar.value = Number(dolar.ask).toFixed(2);
    boxCurrency.appendChild(optionDolar);
    optionEuro.innerHTML = euro.name;
    optionEuro.value = Number(euro.ask).toFixed(2);
    boxCurrency.appendChild(optionEuro);

    // default value
    calculating(quantiny, boxCurrency.value);


    // events
    boxAmount.addEventListener("keyup", e => {
        quantiny = e.target.value;
        calculating(quantiny, boxCurrency.value);
    })
    boxCurrency.addEventListener("change", e => {
        currency = e.target.value;
        calculating(quantiny, currency);
    })
}
function calculating(quantiny, value) {
    const title = document.getElementById("title");
    const total = (quantiny * value).toFixed(2);
    title.innerHTML = `${total} Real brasileiro`;
}