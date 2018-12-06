'use strict';

(function () {
  var generateWizard = function () {
    var newWizardName = window.data.WIZARD_NAMES[Math.floor(Math.random() * window.data.WIZARD_NAMES.length)] + ' ' + window.data.WIZARD_LASTNAMES[Math.floor(Math.random() * window.data.WIZARD_LASTNAMES.length)];
    var newWizardCoat = window.data.WIZARD_COATS[Math.floor(Math.random() * window.data.WIZARD_COATS.length)];
    var newWizardEyes = window.data.WIZARD_EYES[Math.floor(Math.random() * window.data.WIZARD_EYES.length)];
    return {
      name: newWizardName,
      coatColor: newWizardCoat,
      eyesColor: newWizardEyes
    };
  };

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizards = [];
  for (var i = 0; i < window.data.SIMILAR_WIZARDS; i++) {
    wizards[i] = generateWizard();
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  window.data.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
