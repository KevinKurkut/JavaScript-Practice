function calculateAmount() {
    const principal=parseFloat(document.getElementById('principal').value);
    const interest=parseFloat(document.getElementById('interest').value);
    const tenure=parseFloat(document.getElementById('tenure').value);

    const maturityAmount=principal+(principal*interest*tenure)/100;

    document.getElementById('results').innerText=`Total Accumulated Amount: ${maturityAmount.toFixed(2)}`;
}

document.getElementById('calculate-btn').addEventListener('click', calculateAmount);