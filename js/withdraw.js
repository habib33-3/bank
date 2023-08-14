document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmount = parseFloat(withdrawField.value);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotalElement.innerText = currentBalanceTotal;

  withdrawField.value = "";
});
