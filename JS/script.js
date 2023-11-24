function calculateInterest() {
    // input values
    let futureValue = parseFloat(document.getElementById('futureValue').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let interestPeriod = parseFloat(document.getElementById('interestPeriod').value);

    // calculate interest amount
    let interestAmount = futureValue * (interestRate / 100) * interestPeriod;

    // result
    console.log('Interest Amount:', interestAmount);

    // show the result on the page
    document.getElementById('result').textContent = 'Interest Amount: ' + interestAmount;
}

document.getElementById('convertButton').addEventListener('click', calculateInterest);