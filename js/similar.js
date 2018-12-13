'use strict';

(function () {
  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.setup.getCoatColor()) {
      rank += 2;
    }
    if (wizard.colorEyes === window.setup.getEyesColor()) {
      rank++;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.updateWizards = function () {
    var wizards = window.getWizards();
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };
})();
