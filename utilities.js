console.log("utililties");



function getInputFieldValueById(id)
{


    const InputValue=Number(document.getElementById(id).value);
    return InputValue;
    
}

function getTextFieldValueById(id)
{
    const textValue=document.getElementById(id).innerText;
    const textNumber=Number(textValue);
    return textNumber;

}
function showSectionById(id)
{
    document.getElementById('cashin-section').classList.add('hidden');
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('section-transtion').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}