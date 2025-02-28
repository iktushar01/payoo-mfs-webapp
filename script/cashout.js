document.getElementById("out_money_btn").addEventListener("click", function(event){
    event.preventDefault();
    const amount = getInputValueById("out_amount");
     const pin = getInputValueById("cash_out_pin");
    const accountNumber = document.getElementById("user_number").value;
    const mainBalance = getInnerTextById("main_balance");

    if (
        accountNumber.length === 11 &&
        accountNumber.slice(0, 2) === "01" &&
      !accountNumber.includes(" ")
    ) {
      if (pin === 1234){
       const sum = mainBalance - amount;
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