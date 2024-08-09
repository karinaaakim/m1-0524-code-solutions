'use strict';
const $heading = document.querySelector('.message');
function changeTo() {
  if (!$heading) {
    throw new Error('$heading is null');
  }
  $heading.textContent = 'Hello There';
}
setTimeout(changeTo, 2000);
