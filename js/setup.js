'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var generateWizard = function () {
  var newWizardName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LASTNAMES[Math.floor(Math.random() * WIZARD_LASTNAMES.length)];
  var newWizardCoat = WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)];
  var newWizardEyes = WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)];
  return {
    name: newWizardName,
    coatColor: newWizardCoat,
    eyesColor: newWizardEyes
  };
};

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      userDialog.classList.add('hidden');
    }
  });
};

var closePopup = function () {
  userDialog.classList.add('hidden');
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [];
for (var i = 0; i < 4; i++) {
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
