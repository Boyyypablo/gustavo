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

  // Alternar entre Currículo e Carta (documentos)
  var pdfViewer = document.getElementById('pdf-viewer');
  var docTabs = document.querySelectorAll('.doc-tab');
  var docDownloadCv = document.getElementById('doc-download-cv');
  var docDownloadCarta = document.getElementById('doc-download-carta');

  var docs = {
    curriculo: {
      src: 'CV_GustavoMiranda_Geologist.pdf#toolbar=1&navpanes=1',
      title: 'Resume - Gustavo Miranda'
    },
    carta: {
      src: 'Cover Letter_GustavoMiranda.pdf#toolbar=1&navpanes=1',
      title: 'Cover Letter - Gustavo Miranda'
    }
  };

  function setDocView(docKey) {
    if (!docs[docKey] || !pdfViewer) return;
    pdfViewer.src = docs[docKey].src;
    pdfViewer.title = docs[docKey].title;
    docTabs.forEach(function (tab) {
      var isActive = tab.getAttribute('data-doc') === docKey;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-pressed', isActive);
    });
    if (docDownloadCv) docDownloadCv.classList.toggle('is-primary', docKey === 'curriculo');
    if (docDownloadCarta) docDownloadCarta.classList.toggle('is-primary', docKey === 'carta');
  }

  docTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setDocView(tab.getAttribute('data-doc'));
    });
  });

  if (pdfViewer && docDownloadCv) docDownloadCv.classList.add('is-primary');
})();
