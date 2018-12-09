'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var SIMILAR_WIZARDS = 4;

  var generateWizard = function () {
    var newWizardName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LASTNAMES[Math.floor(Math.random() * WIZARD_LASTNAMES.length)];
    var newWizardCoat = window.setup.WIZARD_COATS[Math.floor(Math.random() * window.setup.WIZARD_COATS.length)];
    var newWizardEyes = window.setup.WIZARD_EYES[Math.floor(Math.random() * window.setup.WIZARD_EYES.length)];
    return {
      name: newWizardName,
      coatColor: newWizardCoat,
      eyesColor: newWizardEyes
    };
  };

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizards = [];
  for (var i = 0; i < SIMILAR_WIZARDS; i++) {
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

  window.setup.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
