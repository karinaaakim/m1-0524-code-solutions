# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to display the output which helps debug our code & show where bugs in our code may be

- What is a "model"?
  a structure for the document

- Which "document" is being referred to in the phrase Document Object Model?
  the main "entry point" (HTML document) content inside index.html

- What is the word "object" referring to in the phrase Document Object Model?
  the objects of which it's composed

- What is a DOM Tree?
  the Document Object Model tree is the data representation of the objects that comprise the structure & content of a document on the web

- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector & getElementsById

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
  avoid code duplications, saves processing time

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  to allow the browser to load & render the content first w/out being delayed by JavaScript execution (it helps reduce the page loading time)

- What does `document.querySelector()` take as its argument and what does it return?
  takes a string containing 1 or more CSS selectors as an argument
  returns the first element within the document that matches the specified selector

- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes a string containing 1 or more CSS selectors as an argument
  returns a static NodeList representing a list of the document's elements that match the specified group of selectors

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
