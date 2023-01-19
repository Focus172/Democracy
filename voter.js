// ==UserScript==
// @name         Vote Rigger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Focus
// @match        https://docs.google.com/forms/*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
  window.addEventListener('load', function() {
    if (window.location.pathname.indexOf('/forms/d') === 0) {
      fillAndSubmitForm();
    } else if (window.location.pathname.indexOf('/forms/u') === 0) {
      goBackToForm();
    }

    function fillAndSubmitForm() {
      var option = document.getElementsByClassName('AB7Lab Id5V1')[14];
      option.click();
      var submit = document.getElementsByClassName('NPEfkd RveJvd snByac')[1];
      submit.click();
    }

    function goBackToForm() {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdNZRM14Z3dYG7oZCr8XbHzypZlPg1j8bJXT8yFHso_xVFWfA/viewform';
    }
  });
})();
