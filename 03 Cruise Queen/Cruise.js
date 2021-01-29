
//First Class Increment Decrement
function ticketHandel(isIncrease){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    
    caseNewCount = caseCount;
    if(isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;


    const total = '$'+(caseNewCount * 150);
    document.getElementById('SubTotalCost').innerText = total;

    calculateTotal()
}


//Economy Increment Decrement
function EconomyticketHandel(isIncreaseEconomy){
    const caseInputEconomy = document.getElementById('case-count-Economy');
    const caseCountEconomy = parseInt(caseInputEconomy.value);
    
    caseNewCountEconomy = caseCountEconomy;
    if(isIncreaseEconomy == true){
        caseNewCountEconomy = caseCountEconomy + 1;
    }
    if(isIncreaseEconomy == false && caseCountEconomy > 0){
        caseNewCountEconomy = caseCountEconomy - 1;
    }
    caseInputEconomy.value = caseNewCountEconomy;

    const totalEconomy = '$'+caseNewCountEconomy * 100 ;
    document.getElementById('SubTotalCost').innerText = totalEconomy;

    calculateTotal()
}


// CallIncrementDecrement
function callIncrementDecrement(IncrementDecrement,booleanValue){
    document.getElementById(IncrementDecrement).addEventListener('click',function(){
        ticketHandel(booleanValue);
    
    });

    document.getElementById(IncrementDecrement).addEventListener('click',function(){
        ticketHandel(booleanValue);
        
    });
    
};

callIncrementDecrement('case-increment',true)
callIncrementDecrement('case-decrement',false)
callIncrementDecrement('case-increment-Economy',true)
callIncrementDecrement('case-decrement-Economy',false)


// Calculations
function calculateTotal(){
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const caseInputEconomy = document.getElementById('case-count-Economy');
    const caseCountEconomy = parseInt(caseInputEconomy.value);

    const totalCost = caseCount * 150 + caseCountEconomy * 100;
    
    document.getElementById('SubTotalCost').innerHTML ='$'+ totalCost;

    // VAT
    const totalVat = (totalCost / 100) *10;
    document.getElementById('vatTotal').innerHTML = '$' + totalVat;

    document.getElementById('totalCost').innerHTML ='$'+ (totalCost + totalVat);
}


// Confirm Ticket
document.getElementById('ticket-confirm-msg').addEventListener('click',function(){
    alert(`Your ticket has been properly confirmed. You will be on time on your due date.
Thanks...`);

    const caseInput = document.getElementById('case-count');
    caseInput.value = 1;

    const caseInputEconomy = document.getElementById('case-count-Economy');
    caseInputEconomy.value = 1;

    document.getElementById('SubTotalCost').innerHTML =`$250`;
    document.getElementById('vatTotal').innerHTML = `$25`;
    document.getElementById('totalCost').innerHTML =`$275`;
});