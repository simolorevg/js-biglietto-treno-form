console.log("Se fosse vero che i viaggi educano la mente, i controllori dei treni sarebbero gli uomini più saggi del mondo")
const submitBtn = document.getElementById("submit-btn");
const userNameInput = document.getElementById('username');
const kmChoiceInput = document.getElementById('km-choice');
const userAgeInput = document.getElementById('select-age');
let finalPrice;
let message;
let idNumber= Math.floor(Math.random() * (200000 - 1000) ) + 1000;
let carriage = Math.floor( (Math.random() * 10) + 1);
submitBtn.addEventListener("click", function() {
    //memorzzazione dati e conversione in value
    const userName = userNameInput.value;
    const kmChoice = parseInt(kmChoiceInput.value);
    if(!isNaN(kmChoice)){ //verifico se ha scritto i km in numeri
        const userAge = userAgeInput.value;
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
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener("click", function() {
    userNameInput.value = "";
    kmChoiceInput.value = "";
    userAgeInput.value = "";
});
