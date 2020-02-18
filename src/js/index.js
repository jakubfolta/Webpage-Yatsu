"use strict";
const pageController = (function() {
  const locationButton = document.getElementById('location');
  const place = locationButton.value;
  const url = 'https://www.google.com/maps/place/';
  const popup = document.querySelector('.popup');
  const popupIconClose = document.querySelector('.popup__icon-close');
  const page = window.location;

  const closePopup = e => {
    if (e.target.closest('.popup__container')) {
      return;
    }
    page.href = '#';
  }

  const setupEventListeners = () => {
    // Open url
    locationButton.addEventListener('click', () => {
      window.open(`${url}${place}`);
    });

    // Close popup
    popupIconClose.addEventListener('click', () => {
      page.href = `#`;
    });

    document.addEventListener('keyup', e => {
      if (event.defaultPrevented) {
        return;
      }

      const key = e.key || e.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        page.href = `#`;
      }
    });

    popup.addEventListener('click', closePopup);
  };

  return {
    // Open google maps with location
    init: () => {
      setupEventListeners();
    }
  }
}())

pageController.init();



