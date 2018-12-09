'use strict';

(function () {
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var userWizard = userDialog.querySelector('.setup-wizard');
  var userWizardCoat = userWizard.querySelector('.wizard-coat');
  var userWizardEyes = userWizard.querySelector('.wizard-eyes');
  var userWizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var coatColorInput = userDialog.querySelector('input[name="coat-color"]');
  var eyesColorInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireballColorInput = userDialog.querySelector('input[name="fireball-color"]');
  var counters = {
    coat: 1,
    eyes: 1,
    fireball: 1
  };

  var renderColor = function (elm, collection, key, colorInput, isSvgElement) {
    var idx = counters[key];
    elm.style[isSvgElement ? 'fill' : 'background'] = colorInput.value = collection[idx];
    if (idx === collection.length - 1) {
      counters[key] = 0;
      return;
    }
    counters[key]++;
  };

  userWizardCoat.addEventListener('click', function () {
    renderColor(userWizardCoat, WIZARD_COATS, 'coat', coatColorInput, true);
  });

  userWizardEyes.addEventListener('click', function () {
    renderColor(userWizardEyes, WIZARD_EYES, 'eyes', eyesColorInput, true);
  });

  userWizardFireball.addEventListener('click', function () {
    renderColor(userWizardFireball, WIZARD_FIREBALLS, 'fireball', fireballColorInput);
  });

  window.setup = {
    WIZARD_COATS: WIZARD_COATS,
    WIZARD_EYES: WIZARD_EYES,
    WIZARD_FIREBALLS: WIZARD_FIREBALLS,
    userDialog: userDialog
  };
})();
