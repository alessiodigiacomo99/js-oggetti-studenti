$(function(){
//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 
var persona = {
    nome : "Alessio",
    cognome : "Di Giacomo",
    età : 20
}
//Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in persona) {
    console.log(key, persona[key]);
}
// Creare un array di oggetti di studenti.
var arrayStudenti = [
    studenteUno = {
        nome : "Alessio",
        cognome : "Di Giacomo",
        età : 20
    },

    studenteDue = {
        nome : "Luca",
        cognome : "Pierangelo",
        età : 32
    },

    studenteTre = {
        nome : "Paolo",
        cognome : "Gigi",
        età : 28
    }
];
//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < arrayStudenti.length; i++){
    console.log(arrayStudenti[i].nome, arrayStudenti[i].cognome);
}
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nome = prompt("Come ti chiami?");
var cognome = prompt("Qual'è il tuo cognome?");
var età = Number(prompt("Quanti anni hai?"));
studenteQuattro = {
    nome : nome,
    cognome : cognome,
    età : età
};
arrayStudenti.push(studenteQuattro);
console.log(arrayStudenti);
});