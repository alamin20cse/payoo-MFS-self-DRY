

document.getElementById('add-button').addEventListener('click', function(event) {
    event.preventDefault();

    const AmountField=getInputFieldValueById('amount-field');
    const PinNumber=getInputFieldValueById('pin-button');
   
    if(isNaN(AmountField))
    {
        alert("This is not Number");
        return;
    }

    if(PinNumber===123)
    {
       

        let blance=getTextFieldValueById('blance-value');
        blance=blance+AmountField;
        document.getElementById('blance-value').innerText=blance;
       


        // transtation history
        const p=document.createElement('p');
        p.innerText=`Added :${AmountField} tk  `;
        p.style.background='green';
        document.getElementById("transtion-appen").append(p);

    }
    else
    {
        alert("Pin is wrong ")
    }



    
});




// for cashout
document.getElementById('cashout-button').addEventListener('click',function(event){

    event.preventDefault();
    const CashoutAmountField=getInputFieldValueById('cashout-amount-field');
    const CashoutPinNumber=getInputFieldValueById('cashout-pin-button');

    if(isNaN(CashoutAmountField))
    {
        alert("This not Number");
    }

    if(CashoutPinNumber===123)
    {

        let Newblance=getTextFieldValueById('blance-value');
       Newblance=Newblance-CashoutAmountField;

        document.getElementById('blance-value').innerText=Newblance;



        // Transtion
        const p=document.createElement('p');
        p.innerText=`Withdraw :${Newblance} tk  `;
        p.style.background='red';
        document.getElementById("transtion-appen").append(p);

       
    }
    else
    {
        alert("Pin is Wrong");
    }

});

