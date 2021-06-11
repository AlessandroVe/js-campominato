
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.
//In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var output = document.getElementById("output");

//Il computer deve generare 16 numeri casuali tra 1 e 100.

var max = 100
var min = 1;
var randomnumber=[];

for(i=0;i<16;i++) {
    var number =  Math.floor(Math.random()*(max - min +1 ))+min;
    randomnumber.push(number);
}
console.log(randomnumber);

//I numeri non possono essere duplicati.

for(x=1;x<16;x++){
    if(randomnumber[0]===randomnumber[x]){
        var fixnum = randomnumber[0]+randomnumber[x];
        randomnumber.push(fixnum);   
        alert("diamine")
    }
}

//In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.






































// non so ancora se funziona 

/*  var randomnumber=[];
for(var i=0;i<16;i++){
    var number = Math.floor(Math.random()* max)+min;
    randomnumber.push(number);
    var nuovo = true;
    for(var j=0; j<i; j++){
        if(randomnumber[j]==number);
            nuovo=false;
        }
        if(nuovo){
            randomnumber[i]=number;
        }else{
            i--;
        }
    }
     */