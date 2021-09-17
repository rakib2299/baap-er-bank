// Deposit Event Handler 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposited 
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountText = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount); 

    // add deposite amount 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balaceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balaceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit amount
    depositField.value = '';    
});





// Withdraw Event Handler 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balaceTotal = document.getElementById('balance-total');
    const previousBalanceText = balaceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balaceTotal.innerText = newBalanceTotal;


    // clean the withdraw amount
    withdrawInput.value = '';
})