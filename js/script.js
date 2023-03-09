const submitBtn = document.getElementById("submit-btn");
let finalPrice;
let message;
let idNumber= Math.floor(Math.random() * (200000 - 1000) ) + 1000;
let carriage = Math.floor( (Math.random() * 10) + 1);
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
        message="nessuna";
        //calcolo prezzo e eventuale sconto
        if( userAge === "minorenne"){
            finalPrice = finalPrice - (finalPrice * 0.2);
            message = "Sconto Under 18";
        }else if ( userAge === "Over65"){
            finalPrice = finalPrice - (finalPrice *0.4);
            message = "Sconto Over 65";
        }
        finalPrice = finalPrice.toFixed(2);
        finalPrice = finalPrice + "€";
        userNameInput.value = "";
        kmChoiceInput.value = "";
        userAgeInput.value = "";
    }else{
        alert('ERRORE: DATI NON INSERITI CORRETTAMENTE. RICARICARE LA PAGINA.')
    }
    document.getElementById('utente').innerHTML = userName;
    document.getElementById('price').innerHTML = finalPrice;
    document.getElementById('plain').innerHTML = message;
    document.getElementById('carriage').innerHTML = carriage;
    document.getElementById('idNumber').innerHTML = idNumber;
});