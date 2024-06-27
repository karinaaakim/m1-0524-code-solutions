'use strict';
const $button = document.querySelector('.click-button');
if (!$button) throw new Error('$button does not exist');
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
$button.addEventListener('click', handleClick);
const $mouseover = document.querySelector('.hover-button');
if (!$mouseover) throw new Error('$mouseover does not exist');
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
$mouseover.addEventListener('mouseover', handleMouseover);
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);
