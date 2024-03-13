
var nombre2 = 5;
var cscore = 0;
var Chiffre1 = 0;
var highscore = 0;

function LancerJeu() {
    nombre2 = 5;
    cscore = 0;
    Chiffre1 = 0;
    document.getElementById("nb1").innerHTML = Chiffre1;
    document.getElementById("nb2").innerHTML = nombre2;
    document.getElementById("score").innerHTML = "Score : " + cscore;
    document.getElementById("erreur").innerHTML = " ";
}

function verifPetit() {
    if (Chiffre1 < nombre2) {
        cscore +=1;
        document.getElementById("score").innerHTML = "Score : " + cscore;
        nombre2 = Chiffre1;
        Chiffre1 = Math.floor(Math.random() * 10);
        document.getElementById("nb1").innerHTML = Chiffre1;
        document.getElementById("nb2").innerHTML = nombre2;
        const monTimer = setTimeout(() => {stop}, 2000)
    }
    else {
        scorefinal = cscore;
        cscore=0;
        document.getElementById("erreur").innerHTML = "Erreur";
        document.getElementById("score").innerHTML = "Score : " + cscore;
        if (highscore < scorefinal) {
            highscore = scorefinal;
            document.getElementById("Highscore").innerHTML = "highscore : " + highscore;
        }
        stop()
    }
}

function verifGrand() {
    if (Chiffre1 > nombre2) {
        cscore +=1;
        document.getElementById("score").innerHTML = "Score : " + cscore;
        nombre2 = Chiffre1;
        Chiffre1 = Math.floor(Math.random() * 10);
        document.getElementById("nb1").innerHTML = Chiffre1;
        document.getElementById("nb2").innerHTML = nombre2;
        const monTimer = setTimeout(() => {stop}, 2000)
    }
    else {
        scorefinal = cscore;
        cscore=0;
        document.getElementById("score").innerHTML = "Score : " + cscore;
        document.getElementById("erreur").innerHTML = "Erreur";
        if (highscore < scorefinal) {
            highscore = scorefinal;
            document.getElementById("Highscore").innerHTML = "highscore : " + highscore;
        }
    }
}

function verifEgal() {
    if (Chiffre1 == nombre2) {
        cscore +=1;
        document.getElementById("score").innerHTML = "Score : " + cscore;
        nombre2 = Chiffre1;
        Chiffre1 = Math.floor(Math.random() * 10);
        document.getElementById("nb1").innerHTML = Chiffre1;
        document.getElementById("nb2").innerHTML = nombre2;
        const monTimer = setTimeout(() => {stop}, 2000)
    }
    else {
        scorefinal = cscore;
        cscore=0;
        document.getElementById("score").innerHTML = "Score : " + cscore;
        document.getElementById("erreur").innerHTML = "Erreur";
        if (highscore < scorefinal) {
            highscore = scorefinal;
            document.getElementById("Highscore").innerHTML = "highscore : " + highscore;
        }
    }
}

function stop (){
    clearTimeout(monTimer)
    scorefinal = cscore;
    cscore=0;
        if (highscore < scorefinal) {
            highscore = scorefinal;
            document.getElementById("Highscore").innerHTML = "highscore : " + highscore;
        }
    document.getElementById("erreur").innerHTML = "Timeout";
}