function checkForm() {
    const checkbox = document.getElementById('agreementCheckbox');
    if (!checkbox.checked) {
        alert("Devi accettare di rispondere alle domande da solo.");
        return false; // Ferma l'invio del modulo
    }
    // Se la checkbox è selezionata, puoi procedere
    // qui puoi redirigere a una nuova pagina
    window.location.href = 'pagina_successiva.html';
}