# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to display the output which helps debug our code & show where bugs in our code may be

- What is the purpose of events and event handling?
  events are fired to notify code of "interesting changes", which can be user interactions like resizing a window, etc., which can affect code execution

- Are all possible parameters required to use a JavaScript method or function?
  no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener

- What is a callback function?
  a function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?
  event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target refers to the element that is responsible for firing the event.
  check by console.log.
  get more info from MDN

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  1st - is correct bc handleClick definition is being called
  2nd - is incorrect bc the handleClick function is being called

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
