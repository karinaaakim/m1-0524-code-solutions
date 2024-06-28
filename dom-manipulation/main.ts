let numOfClicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

if (!$hotButton) throw new Error('The $hotButton query failed');
if (!$clickCount) throw new Error('The $clickCount query failed');

$hotButton.addEventListener('click', handleHotButton);

function handleHotButton(event: Event): void {
  if (!$hotButton || !$clickCount ) {
    throw new Error('The $hotButton or $clickCount query failed')
  }
  numOfClicks++;
  let temperature;
  if (numOfClicks < 4 && numOfClicks > 0) {
    temperature = 'cold';
  } else if (numOfClicks < 7) {
    temperature = 'cool';
  } else if (numOfClicks < 10) {
    temperature = 'tepid';
  } else if (numOfClicks < 13) {
    temperature = 'warm';
  } else if (numOfClicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear'
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clickCount.textContent = 'Clicks: ' + numOfClicks;
}
