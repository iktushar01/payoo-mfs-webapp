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

    if (
    accountNumber.length === 11 &&
    accountNumber.slice(0, 2) === "01" &&
  !accountNumber.includes(" ")
) {
  if (pin === 1234){
   const sum = amount + mainBalance;
   //document.getElementById("main_balance").innerText = sum;
   setInnerTextByIdAndValue("main_balance",sum);
  }
  else{
    alert("Something is Wrong! Please Check Again!");
  }
}
else{
alert("Please Enter a Valid Number");
}
  

});