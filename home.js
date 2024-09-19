

document.getElementById('add-button').addEventListener('click', function(event) {
    event.preventDefault();

    // const TakaButton = document.getElementById('taka-button'); 
    // let TakaButtonnumber = Number(TakaButton.innerText); 




    // const AmountField = Number(document.getElementById('amount-field').value);
    // const AmountField=getInputFieldValueById();

    // console.log(AmountField);
    const AmountField=getInputFieldValueById('amount-field');
    const PinNumber=getInputFieldValueById('pin-button');
    console.log(AmountField,PinNumber);



    // const PinButton = document.getElementById('pin-button').value;

    // if (PinButton === '123') {
    //     TakaButtonnumber = TakaButtonnumber + AmountField; // Add the amount
    //     TakaButton.innerText = TakaButtonnumber; // Update the innerText of the element
    // } else {
    //     alert('pin is wrong');
    // }
    
});

