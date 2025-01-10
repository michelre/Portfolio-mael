import './style.css';
import emailjs from 'emailjs-com';

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("");
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ces valeurs doivent correspondre à votre modèle EmailJS
    emailjs.sendForm('', '', this)
      .then(function() {
        alert('Message envoyé avec succès !');
      }, function(error) {
        alert('Échec de l\'envoi du message : ' + JSON.stringify(error));
      });
  });
});
