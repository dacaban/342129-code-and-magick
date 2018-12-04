'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var SIMILAR_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userDialogInput = userDialog.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if ((evt.keyCode === ESC_KEYCODE) && (document.activeElement !== userDialogInput)) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

var userWizard = userDialog.querySelector('.setup-wizard');
var userWizardCoat = userWizard.querySelector('.wizard-coat');
var userWizardEyes = userWizard.querySelector('.wizard-eyes');
var userWizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var coatColorInput = userDialog.querySelector('input[name="coat-color"]');
var eyesColorInput = userDialog.querySelector('input[name="eyes-color"]');
var fireballColorInput = userDialog.querySelector('input[name="fireball-color"]');
var counters = {
  coat: 1,
  eyes: 1
};

var renderColor = function (element, colorArray, clickCounter, colorInput) {
  var index = clickCounter % colorArray.length;
  element.style.fill = colorArray[index];
  colorInput.value = colorArray[index];
};

userWizardCoat.addEventListener('click', function () {
  renderColor(userWizardCoat, WIZARD_COATS, counters.coat, coatColorInput);
  counters.coat++;
});

userWizardEyes.addEventListener('click', function () {
  renderColor(userWizardEyes, WIZARD_EYES, counters.eyes, eyesColorInput);
  counters.eyes++;
});

var clickFireballCounter = 1;
userWizardFireball.addEventListener('click', function () {
  if (clickFireballCounter >= WIZARD_FIREBALLS.length) {
    clickFireballCounter = 0;
  }
  userWizardFireball.style.background = WIZARD_FIREBALLS[clickFireballCounter];
  fireballColorInput.value = WIZARD_FIREBALLS[clickFireballCounter];
  clickFireballCounter++;
});

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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
