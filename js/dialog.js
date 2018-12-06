'use strict';

(function () {
  var userDialogInput = window.data.userDialog.querySelector('.setup-user-name');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = window.data.userDialog.querySelector('.setup-close');
  var startCoordsPopup = {
    x: 0,
    y: 0
  };
  var onPopupEscPress = function (evt) {
    if ((evt.keyCode === window.data.ESC_KEYCODE) && (document.activeElement !== userDialogInput)) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.data.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    if ((startCoordsPopup.x === 0) && (startCoordsPopup.y === 0)) {
      startCoordsPopup.x = window.data.userDialog.offsetLeft;
      startCoordsPopup.y = window.data.userDialog.offsetTop;
    }
  };

  var closePopup = function () {
    window.data.userDialog.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.data.userDialog.style.top = startCoordsPopup.y + 'px';
    window.data.userDialog.style.left = startCoordsPopup.x + 'px';
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.data.ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.data.ENTER_KEYCODE) {
      closePopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  var dialogHandler = window.data.userDialog.querySelector('.upload');

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

      window.data.userDialog.style.top = (window.data.userDialog.offsetTop - shift.y) + 'px';
      window.data.userDialog.style.left = (window.data.userDialog.offsetLeft - shift.x) + 'px';
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
