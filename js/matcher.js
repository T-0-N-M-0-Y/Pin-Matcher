// 1st Pin Genarate Korte Hobe
function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
//2nd Generate Kora pin ta ke 4 Digit Banate hobe
function getPin() {
    const pin = genaratePin();
    const pinConvertToString = pin + '';
    if (pinConvertToString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
// 3rd Pin ta k call korte hpbe & Pin ta ke Display korate hobe.
document.getElementById('pin-genarator').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin);

    //Display Pin
    const displayPin = document.getElementById('input-pin');
    displayPin.value = pin;
})

//4th Calculator Declare
document.getElementById('calculator').addEventListener('click', function (event) {
    const calNumber = event.target.innerText;

    // 5th Display in Calculator Input Field
    const typedNumbers = document.getElementById('input-calculator-pin');
    const displayedNumber = typedNumbers.value;

    if (isNaN(calNumber)) {
        if (calNumber === 'C') {
            typedNumbers.value = '';
        }
        else if (calNumber === '<') {
            const digits = displayedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbers.value = remainingDigits;
        }
    }
    else {
        const newDisplayedNumber = displayedNumber + calNumber;
        typedNumbers.value = newDisplayedNumber;
    }
})

//6th Submit Button e Pin Set korte hobe
document.getElementById('btn-submit').addEventListener('click', function () {
    const displayPin = document.getElementById('input-pin');
    const currentPin = displayPin.value;

    const typedNumbers = document.getElementById('input-calculator-pin');
    const typedNumberField = typedNumbers.value;
    typedNumbers.value = '';

    const successMessage = document.getElementById('pin-success');
    const failedMessage = document.getElementById('pin-failed');
    if (currentPin === typedNumberField) {
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
    }
    else {
        failedMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
    typedNumbers.value = '';
})