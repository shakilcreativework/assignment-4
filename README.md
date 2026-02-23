
# Assignment 4 - Job Application Tracker

## Technology Stack
- HTML
- TailwindCSS
- DaisyUI
- Vanilla JavaScript

## Answers

### 1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
getElementById selects one element by ID.
getElementsByClassName selects multiple elements by class and returns a live HTMLCollection.
querySelector selects the first matching element using CSS selectors.
querySelectorAll selects all matching elements and returns a static NodeList.

### 2. How to create and insert a new element into the DOM
Use document.createElement() to create an element, then appendChild() or append() to insert it into the DOM.

### 3. What is Event Bubbling?
Event Bubbling is when an event starts from the target element and propagates upward to parent elements.

### 4. What is Event Delegation?
Event Delegation is attaching a single event listener to a parent element to handle events for its child elements. It improves performance.

### 5. Difference between preventDefault() and stopPropagation()
preventDefault() stops the default browser behavior.
stopPropagation() stops the event from bubbling up the DOM.
