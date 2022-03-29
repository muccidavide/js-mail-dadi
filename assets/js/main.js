
// dichiaro costanti per elenco email autorizzate e quell ainserita dall'utente

const usersAuthorizedEmails = ["aldo@libero.it", "giovvani@gmail.com", "giacomo@gmail.com"]
const userEmailPrompt = prompt("Inserisci qui la tua email")

// Validazione email con alert  

   for(i = 0 ; i < usersAuthorizedEmails.length; i++){
      const usersAuthorizedEmail = usersAuthorizedEmails[i];
      if(userEmailPrompt == usersAuthorizedEmail){
          alert("Utente Autorizzato")
      } else {
          alert("Utente non Autorizzato")
      }break 

  } 

///// !!!!! HERE BONUS  !!!!! //////

const userEmailInput = document.getElementById('emailId');
const userInputButton = document.getElementById('submitId');
const resultAccess = document.querySelector('.result_access');

// Validazione email con risultato a schermo 

userInputButton.addEventListener('click', 
function () {
    for(i = 0 ; i < usersAuthorizedEmails.length; i++){
        const usersAuthorizedEmail = usersAuthorizedEmails[i];
        if(userEmailInput.value == usersAuthorizedEmail){
            resultAccess.insertAdjacentHTML("beforeend", 
            "<span>Utente Autorizzato</span>"
            )
        } else {
            resultAccess.insertAdjacentHTML("beforeend", 
            "<span>Utente Non Autorizzato</span>"
            )
        }break 
    
    } 
}
)
   
  /////////////////// Gioco dei Dadi ///////////////////////////////////

  // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 const userNumberRnd = parseInt(Math.random()*6) + 1;
 const computerNumberRnd = parseInt(Math.random()*6) + 1;

 // Stabilire il vincitore, in base a chi fa il punteggio più alto.

 if (userNumberRnd < computerNumberRnd){
     console.log("Vince il Pc");
 } else if(userNumberRnd === computerNumberRnd){
     console.log("Pareggio");
 } else {
    console.log("Bravo hai vinto!"); }
