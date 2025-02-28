document.getElementById("tranfer_money_btn").addEventListener("click", function(event){
    event.preventDefault();
    const amount = getInputValueById("tranfer_amount");
     const pin = getInputValueById("tranfer_pin");
    const accountNumber = document.getElementById("reciver_number").value;
    const mainBalance = getInnerTextById("main_balance");


    if(amount< 0 ){
      alert("Please enter a valid amount")
      return;
    }

  if(amount > mainBalance ) {
    alert("Insufficient Balance!");
    return;
  }


    const transactionContainer = document.getElementById("transaction_container");
    const newTransaction = document.createElement("div");
    newTransaction.classList.add("flex", "items-center", "gap-3", "mt-2" , "mb-2");
  
    const now = new Date();
        const formattedTime = now.toLocaleString();
  
        newTransaction.innerHTML = `
        <div class="flex items-center gap-3 mb-6">
        <img class="w-12 p-1 bg-slate-200 rounded-full" src="./resources/send.svg" alt="">
        <div>
          <h1 class="font-medium text-base">Transfer Money</h1>
          <p>Transfer $ ${amount} To ${accountNumber}</p>
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
       const sum = mainBalance - amount;
       setInnerTextByIdAndValue("main_balance",sum);
       alert("successful transfer your amount")
      }
      else{
        alert("Something is Wrong! Please Check Again!");
      }
    }
    else{
    alert("Please Enter a Valid Number");
    }
});