
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.
//In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var output = document.getElementById("output");

//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.

var max = 100;
var min = 1;
var randomnumber=[];

while(randomnumber.length < 16){
    var number = Math.floor(Math.random()*(max - min +1 ))+min;

    if(!randomnumber.includes(number)){
        randomnumber.push(number);
    }
}

console.log(randomnumber);


//In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
userNums=[];
var gameOver= false;
while(userNums.length < 84){
    var selectedNum =parseInt(prompt("inserisci un numero tra 1 e 100"));
     //L’utente non può inserire più volte lo stesso numero.
     
     if(!userNums.includes(selectedNum)){
         //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        if (randomnumber.includes(selectedNum)){
            alert("Mina beccata!")
            var gameOver= true;

            break;
        } else {
            userNums.push(selectedNum);           
        }

    }else{
        alert("occhio e' un numero dupliato, Riprova")
    }
}
if(gameOver){
    alert("hai perso");

}else[

    alert("hai vinto")

]


//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

 alert("il tuo punteggio e' "+ userNums.length);


