document.getElementById('attesaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var email = document.getElementById('email').value;

    // Semplice logica per mostrare conferma (puoi inviare i dati a un server)
    document.getElementById('messaggioConferma').innerText = `Grazie per esserti iscritto, ${nome}! Ti informeremo appena il progetto sarà disponibile.`;

    // Qui puoi aggiungere la logica per inviare i dati a un database
});
