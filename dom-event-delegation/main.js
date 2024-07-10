'use strict';
const $list = document.querySelector('.task-list');
if (!$list) throw new Error('The $list query failed');
$list.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  console.log('eventTarget:', $eventTarget);
  console.log('event.target.tagName:', $eventTarget.tagName);
  if ($eventTarget.tagName !== 'BUTTON') {
    return;
  }
  const $listItem = $eventTarget.closest('.task-list-item');
  console.log('closest .task-list-item', $listItem);
  $listItem?.remove();
});
