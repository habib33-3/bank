document.querySelector("#deposit-btn").addEventListener("click", function () {
  // Get previous deposit total by id
  const newDepositAmount = getInputValueById("deposit-field");

  //   calculate new deposit total
  const previousDepositTotal = getElementValueById("deposit-total");

  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //   set deposit total value
  setTextElementById("deposit-total", newDepositTotal);

  //   get previous balance using function
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
