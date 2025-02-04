const random = Math.ceil(Math.random() *100);

const feebback = document.querySelector("#feedback");

let guessCount = 0;

const input = document.querySelector("#input-nummer");
input.addEventListener("keydown", checkKeyPress);

function checkKeyPress(evt) {
    if (evt.keyCode == 13) {

        guessCount++;

        if (input.value < random) {
            feedback.innerHTML = "Ditt tal är för litet, pröva något större!";
            gissningar.innerHTML = "Du har gissat totalt " + guessCount + " gånger.";
        }
        
        else if (input.value > random) {
            feedback.innerHTML = "Ditt tal är för stort, testa något mindre!";
            gissningar.innerHTML = "Du har gissat totalt " + guessCount + " gånger."
        }
        
        else {
            feedback.innerHTML = "Du gissade rätt! Hurra!";
            gissningar.innerHTML = "Du gissade totalt " + guessCount + " gånger."
            document.body.style.backgroundColor = "rgb(202, 227, 165)";
            input.style.backgroundColor = "pink";
        }
    }
}


