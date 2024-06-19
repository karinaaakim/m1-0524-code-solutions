# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  source order, inheritance, specificity, !important

- What does the term "source order" mean with respect to CSS?
  it's the order in which CSS rules appear in the stylesheet. the rule that appears further down in the stylesheet is the one that applies

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  inheritance - elements can inherit CSS properties from their parents

- List the three selector types in order of increasing specificity.
  element selector, class selector, id selector

- Why is using `!important` considered bad practice?
  !important has the highest specific possible so it's near impossible to override without using another !important. it also breaks the cascade, which might affect other rules

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
