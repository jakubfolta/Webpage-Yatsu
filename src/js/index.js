"use strict";
const pageController = (function() {
  const locationButton = document.getElementById('location');
  const place = locationButton.value;
  const url = 'https://www.google.com/maps/place/';

  return {
    // Open google maps with location
    openLocation: () => {
      locationButton.addEventListener('click', () => {
        window.open(`${url}${place}`);
      })
    }
  }
}())

pageController.openLocation();



