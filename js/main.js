document.addEventListener('DOMContentLoaded', main);

function main() {    
    // exécutions après chargement de la page
    let buttons = document.querySelectorAll('.copy');

    buttons.forEach(button => {
        button.addEventListener('click', copy);
    });

    function copy() {
        /* Get the text field */
        var copyText = this.parentElement.querySelector('.field');
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        this.textContent = 'Copié';
      }
}