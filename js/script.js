const submitBtn = document.getElementById("submit-btn");
let finalPrice;
let message;
submitBtn.addEventListener("click", function() {
    //memorzzazione dati e conversione in value
    const userNameInput = document.getElementById('username');
    const userName = userNameInput.value;
    console.log(userName);
    const kmChoiceInput = document.getElementById('km-choice');
    const kmChoice = parseInt(kmChoiceInput.value);
    console.log(kmChoice, typeof kmChoice);
    if(!isNaN(kmChoice)){ //verifico se ha scritto i km in numeri
        const userAgeInput = document.getElementById('select-age');
        const userAge = userAgeInput.value;
        console.log (userAge);
        finalPrice = kmChoice * 0.21;
        message="Prezzo pieno:";
        //calcolo prezzo e eventuale sconto
        if( userAge === "minorenne"){
            finalPrice = finalPrice - (finalPrice * 0.2);
            message = "Sconto Under 18:";
        }else if ( userAge === "Over65"){
            finalPrice = finalPrice - (finalPrice *0.4);
            message = "Sconto Over 65:";
        }
        finalPrice = finalPrice.toFixed(2);
        message =message + " " + finalPrice + "€";
        userNameInput.value = "";
        kmChoiceInput.value = "";
        userAgeInput.value = "";
    }else{
        message = "DATI NON INSERITI CORRETTAMENTE. RICARICARE LA PAGINA";
    }
    document.getElementById('message').innerHTML = message;
});