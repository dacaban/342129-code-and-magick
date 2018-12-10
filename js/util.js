'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var userDialog = document.querySelector('.setup');
  var userDialogInput = userDialog.querySelector('.setup-user-name');
  var startCoordsPopup = {
    x: 0,
    y: 0
  };

  var isEnterEvent = function (evt) {
    return (evt.keyCode === ENTER_KEYCODE);
  };

  var onPopupEscPress = function (evt) {
    if ((evt.keyCode === ESC_KEYCODE) && (document.activeElement !== userDialogInput)) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    if ((startCoordsPopup.x === 0) && (startCoordsPopup.y === 0)) {
      startCoordsPopup.x = userDialog.offsetLeft;
      startCoordsPopup.y = userDialog.offsetTop;
    }
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    userDialog.style.top = startCoordsPopup.y + 'px';
    userDialog.style.left = startCoordsPopup.x + 'px';
  };

  window.util = {
    isEnterEvent: isEnterEvent,
    openPopup: openPopup,
    closePopup: closePopup
  };
})();
