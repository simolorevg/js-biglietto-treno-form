const submitBtn = document.getElementById("submit-btn");
let finalPrice;
submitBtn.addEventListener("click", function() {
    const userNameInput = document.getElementById('username');
    const userName = userNameInput.value;
    console.log(userName);
    const kmChoiceInput = document.getElementById('km-choice');
    const kmChoice = parseInt(kmChoiceInput.value);
    console.log(kmChoice, typeof kmChoice);
    const userAgeInput = document.getElementById('select-age');
    const userAge = userAgeInput.value;
    console.log (userAge);
});