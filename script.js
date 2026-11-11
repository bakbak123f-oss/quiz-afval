let nummer = 0;
let score = 0;

const vragen = [
    "Waar kun je eten gooien ?",
    "Waar kun je plastic weggooien ?",
    "Waar kun je papier weggooien ?",
    "Waar kun je glas weggoiien ?",
    "Waar kun je kabels ?"
];

const antwoorden = [
    "restbak",
    "plasticbak",
    "papierbak",
    "glasbak",
    "electro Afval"
];

const vraag = document.querySelector("#vraag")
const antwoord = document.querySelector("#antwoord")
const feedback = document.querySelector("#feedback")
const controleerKnop = document.querySelector("#controleer")
const volgendeKnop = document.querySelector("#volgende")

vraag.textContent = vragen[nummer]

controleerKnop.addEventListener("click", function () {

    if (antwoord.value == "") {
        feedback.textContent = "Vul een antwoord in"
    }
    else if (antwoord.value.toLowerCase() == antwoorden[nummer]) {
        feedback.textContent = "Goedzo!"
        score++
    }
    else {
        feedback.textContent = "Helaas verkeerd!"
    }

});

volgendeKnop.addEventListener("click", function () {

    nummer++

    antwoord.value = ""
    feedback.textContent = ""

    if (nummer < 5) {
        vraag.textContent = vragen[nummer]
    }
    else {
        vraag.textContent = "Quiz klaar!"
        feedback.textContent = "Je score is: " + score + " van de 5"
    }

})
