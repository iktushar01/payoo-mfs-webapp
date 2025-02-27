document.getElementById("cash_out_section").style.display = "none";
document.getElementById("Transfer_money_section").style.display = "none";
document.getElementById("get_bonus_section").style.display = "none";
document.getElementById("pay_bill_section").style.display = "none";
document.getElementById("transaction_section").style.display = "none";



document.getElementById("add_money_box").addEventListener("click", function() {
    handleToggle("add_money_section", "block")
    handleToggle("cash_out_section", "none");
    handleToggle("transaction_section", "none");
    handleToggle("Transfer_money_section", "none");
    handleToggle("get_bonus_section", "none");
    handleToggle("pay_bill_section", "none");    
});
document.getElementById("cash_out_box").addEventListener("click", function() {
    handleToggle("add_money_section", "none")
    handleToggle("cash_out_section", "block");
    handleToggle("transaction_section", "none");
    handleToggle("Transfer_money_section", "none");
    handleToggle("get_bonus_section", "none");
    handleToggle("pay_bill_section", "none");    
});
document.getElementById("Transfer_Money_box").addEventListener("click", function() {
    handleToggle("add_money_section", "none")
    handleToggle("cash_out_section", "none");
    handleToggle("transaction_section", "none");
    handleToggle("Transfer_money_section", "block");
    handleToggle("get_bonus_section", "none");
    handleToggle("pay_bill_section", "none");    
});
document.getElementById("Get_Bonus_box").addEventListener("click", function() {
    handleToggle("add_money_section", "none")
    handleToggle("cash_out_section", "none");
    handleToggle("transaction_section", "none");
    handleToggle("Transfer_money_section", "none");
    handleToggle("get_bonus_section", "block");
    handleToggle("pay_bill_section", "none");    
});
document.getElementById("pay_bill_box").addEventListener("click", function() {
    handleToggle("add_money_section", "none")
    handleToggle("cash_out_section", "none");
    handleToggle("transaction_section", "none");
    handleToggle("Transfer_money_section", "none");
    handleToggle("get_bonus_section", "none");
    handleToggle("pay_bill_section", "block");    
});
document.getElementById("Transactions_box").addEventListener("click", function() {
    handleToggle("add_money_section", "none")
    handleToggle("cash_out_section", "none");
    handleToggle("transaction_section", "block");
    handleToggle("Transfer_money_section", "none");
    handleToggle("get_bonus_section", "none");
    handleToggle("pay_bill_section", "none");    
});
