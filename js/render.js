'use strict';

(function () {
  var SIMILAR_WIZARDS = 4;

  var similar = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat.toString();
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes.toString();
    return wizardElement;
  };

  window.render = function (data) {
    var takeNumber = data.length > SIMILAR_WIZARDS ? SIMILAR_WIZARDS : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }
    similar.classList.remove('hidden');
  };
})();
