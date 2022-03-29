/* 
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte?
 Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
non bisogna ricordarsi a memoria come generare dei numeri random, c'é W3S per questo https://www.w3schools.com/js/js_random.asp
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

const usersAuthorizedEmails = ["aldo@libero.it", "giovvani@gmail.com", "giacomo@gmail.com"]

const userEmailInput = prompt("Inserisci qui la tua email")

// Validazione email con alert  

  for(i = 0 ; i < usersAuthorizedEmails.length; i++){
      const usersAuthorizedEmail = usersAuthorizedEmails[i];
      if(userEmailInput == usersAuthorizedEmail){
          alert("Utente Autorizzato")
      } else {
          alert("Utente non Autorizzato")
      }break 

  }