# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    executes a provided function once for each array element
  - What should the callback function do?
    it executes on each element & takes 3 arguments (currentValue, index, & array (index & array are optional))
  - What is `Array.forEach` useful for?
    to provide function on each element w/out creating a new array

- `Array.map`:

  - What does `Array.map` do?
    creates a new array populated with the results of calling a provided function on every element in the calling array
  - What should the callback function return?
    a new array w/each element being the result of the callback function
  - What is `Array.map` useful for?
    useful for modifying each element of an array

- `Array.find`:

  - What does `Array.find` do?
    returns the first element in the provided array that satisfies the provided testing function (if none pass, then undefined is returned)
  - What should the callback function return?
    a truthy value to indicate a matching element has been found, & a falsy value otherwise
  - What is `Array.find` useful for?
    can use to single out a specific property within an object or array

- `Array.filter`:
  - What does `Array.filter` do?
    creates a subset array of elements that pass the filter, w/out modifying the original array
  - What should the callback function return?
    a truthy value to keep the element in the resulting array, & a falsy value otherwise
  - What is `Array.filter` useful for?
    like array.find, but can return multiple values in an array

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
