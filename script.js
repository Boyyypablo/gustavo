(function () {
  'use strict';

  // Ano no footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('is-open'));
    });

    // Fechar ao clicar em um link
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
      });
    });
  }

  // Formulário de contato (envio por mailto por padrão; pode trocar por backend depois)
  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.querySelector('#nome').value.trim();
      var email = form.querySelector('#email').value.trim();
      var msg = form.querySelector('#mensagem').value.trim();
      if (!nome || !email || !msg) return;
      var subject = encodeURIComponent('Contato pelo portfólio - ' + nome);
      var body = encodeURIComponent('Nome: ' + nome + '\nEmail: ' + email + '\n\nMensagem:\n' + msg);
      // Substitua seu@email.com pelo seu email real no index.html
      var mailto = document.querySelector('a[href^="mailto:"]');
      var emailAddr = mailto ? mailto.getAttribute('href').replace('mailto:', '').split('?')[0] : 'seu@email.com';
      window.location.href = 'mailto:' + emailAddr + '?subject=' + subject + '&body=' + body;
    });
  }
})();
