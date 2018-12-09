'use strict';

(function () {

  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = window.setup.userDialog.querySelector('.setup-close');

  userDialogOpen.addEventListener('click', function () {
    window.util.openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (window.util.isEnterEvent(evt)) {
      window.util.openPopup();
    }
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (window.util.isEnterEvent(evt)) {
      window.util.closePopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    window.util.closePopup();
  });

  var dialogHandler = window.setup.userDialog.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.userDialog.style.top = (window.setup.userDialog.offsetTop - shift.y) + 'px';
      window.setup.userDialog.style.left = (window.setup.userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
