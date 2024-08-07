let count = 4;
const $countdown = document.querySelector('.countdown-display');

function countDown(): void {
  if (!$countdown) {
    throw new Error('$countdown is null');
  }
  count--;
  if (count > 0) {
    $countdown.textContent = count.toString();
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownID);
  }
}

const countdownID = setInterval(countDown, 1000);
