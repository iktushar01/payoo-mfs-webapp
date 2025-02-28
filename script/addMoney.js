// without utilities function

// document.getElementById("add_money_btn").addEventListener("click", function(event){
//   event.preventDefault();
//   const accountNumber = document.getElementById("account_number").value;
//   const pin = document.getElementById("account_password").value;
//   const convertPin = parseInt(pin);
//   const amount = document.getElementById("amount").value;
//   const convertedAmount = parseInt(amount);
//   const mainBalance = document.getElementById("main_balance").innerText;
//   const convertedMainBalance = parseInt(mainBalance);

//   if (
//     accountNumber.length === 11 &&
//     accountNumber.slice(0, 2) === "01" &&
//   !accountNumber.includes(" ")
// ) {
//   if (convertPin === 1234){
//    const sum = convertedMainBalance + convertedAmount;
//    document.getElementById("main_balance").innerText = sum;
//   }
//   else{
//     alert("Login Failed");
//   }
// }
// else{
// alert("Please Enter a Valid Number");
// }
  

// });

// with utilities function

document.getElementById("add_money_btn").addEventListener("click", function(event) {
  event.preventDefault();
  const amount = getInputValueById("amount");
  const pin = getInputValueById("account_password");
  const accountNumber = document.getElementById("account_number").value;
  const mainBalance = getInnerTextById("main_balance");
  const selectedBank = document.getElementById("select_bank").value;
  console.log(selectedBank);

  
  if(amount < 0){
    alert("Please enter a valid amount")
    return;
  }


  const transactionContainer = document.getElementById("transaction_container");
  const newTransaction = document.createElement("div");
  newTransaction.classList.add("flex", "items-center", "gap-3", "mt-2", "mb-2");

  const now = new Date();
      const formattedTime = now.toLocaleString();

      newTransaction.innerHTML = `
      <div class="flex items-center gap-3 mb-6">
      <img class="w-12 p-1 bg-slate-200 rounded-full" src="./resources/send.svg" alt="">
      <div>
        <h1 class="font-medium text-base">Add Money</h1>
        <p>Added $ ${amount} Form ${accountNumber}</p>
        <p class="text-gray-500 text-sm">${formattedTime}</p>
      </div>
      </div>
    `;

    transactionContainer.appendChild(newTransaction);



    if (
    accountNumber.length === 11 &&
    accountNumber.slice(0, 2) === "01" &&
  !accountNumber.includes(" ")
) {
  if (pin === 1234){
   const sum = amount + mainBalance;
   //document.getElementById("main_balance").innerText = sum;
   setInnerTextByIdAndValue("main_balance",sum);
   alert("Successfully added your amount")
  }
  else{
    alert("Something is Wrong! Please Check Again!");
  }
}
else{
alert("Please Enter a Valid Number");
}
  

});