# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  - && can check for truthy values in variables & combine conditions to manage complex checks
  - || can set default values or take alternate actions when variables hold falsy values

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

  - short-circuit evaluation skips the execution of some sub-expressions as soon as the value is determined as truthy or falsy
  - falsy && anything is short-circuit evaluated to the falsy value
  - truthy || anything is short-circuit evaluated to the truthy value

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

  - ?? is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, & otherwise returns the left-side
  - it differs because it looks for null or undefined in expr1

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  - ?: is the only JS operator that takes 3 operands:
    a condition, an expression to execute if the condition is truthy, & the expression to execute if the condition is falsy
  - it differs bc it can take null or undefined as an argument
  - also differs bc ?: is an expression & 'if/else' is a statement

- What is the `?.` (optional chaining) operator? When would you use it?

  - ?. is an operator that accesses an object's property or calls a function
  - use if the reference would be null or undefined, so it can return undefined instead of an error

- What is `...` (spread) syntax? How do you use it with arrays and objects?

  - it allows an iterable to be expended in places where arguments or elements are expected
  - use w arrays & objects by creating a new variable & when assigning it, use ...nameOfArray/Object, new argument/element

- What data types can be spread into an array? Into an object?

  - only iterables can be spread into an array
  - anything that has properties for objects

- How does spread syntax differ from rest syntax?
  less code written

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
