let billAmountElement = document.getElementById("billAmount");
let percentageElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

let errorMsgElement = document.getElementById("errorMessage");

function onCalculateButton() {
    if (billAmountElement.value === "") {
        errorMsgElement.textContent = "Please Enter a Valid Input";
        errorMsgElement.style.color = "red";
    } else if (percentageElement.value === "") {
        errorMsgElement.textContent = "Please Enter a Valid Input";
        errorMsgElement.style.color = "red";
    } else {
        errorMsgElement.textContent = "";
        let billValue = parseInt(billAmountElement.value);
        let percentageVal = parseInt(percentageElement.value);
        let calculatedBill = (percentageVal / 100) * billValue;
        tipAmountElement.value = calculatedBill;
        totalAmountElement.value = billValue + calculatedBill;

    }

}