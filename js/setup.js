'use strict';

(function () {
  var userWizard = window.data.userDialog.querySelector('.setup-wizard');
  var userWizardCoat = userWizard.querySelector('.wizard-coat');
  var userWizardEyes = userWizard.querySelector('.wizard-eyes');
  var userWizardFireball = window.data.userDialog.querySelector('.setup-fireball-wrap');
  var coatColorInput = window.data.userDialog.querySelector('input[name="coat-color"]');
  var eyesColorInput = window.data.userDialog.querySelector('input[name="eyes-color"]');
  var fireballColorInput = window.data.userDialog.querySelector('input[name="fireball-color"]');
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
    renderColor(userWizardCoat, window.data.WIZARD_COATS, 'coat', coatColorInput, true);
  });

  userWizardEyes.addEventListener('click', function () {
    renderColor(userWizardEyes, window.data.WIZARD_EYES, 'eyes', eyesColorInput, true);
  });

  userWizardFireball.addEventListener('click', function () {
    renderColor(userWizardFireball, window.data.WIZARD_FIREBALLS, 'fireball', fireballColorInput);
  });
})();
