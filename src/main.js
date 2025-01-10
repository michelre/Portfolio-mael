import './style.css';
import emailjs from '@emailjs/browser'

const {VITE_EMAILJS_SECRET, VITE_EMAILJS_SERVICEID, VITE_EMAILJS_TEMPLATEID} = import.meta.env

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init(VITE_EMAILJS_SECRET);
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ces valeurs doivent correspondre à votre modèle EmailJS
    emailjs.sendForm(VITE_EMAILJS_SERVICEID, VITE_EMAILJS_TEMPLATEID, this)
      .then(function() {
        alert('Message envoyé avec succès !');
      }, function(error) {
        alert('Échec de l\'envoi du message : ' + JSON.stringify(error));
      });
  });
});
