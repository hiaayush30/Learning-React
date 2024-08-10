Here's a quick rundown:

1. **Component**: A reusable piece of UI in React, which can be a function or a class. Components can be simple (like a button) or complex (like a form).

2. **State**: A way to store data that can change over time and affects how a component renders. State is managed within the component using hooks like `useState`.

3. **Rendering**: The process of converting React components into HTML that gets displayed on the web page. React re-renders components when their state or props change.

4. **Prop (Property)**: Data passed from a parent component to a child component. Props are read-only, meaning the child component cannot change the prop directly.

5. **Hooks in React** are special functions that let you use state and other React features in functional components (components defined as functions rather than classes).

- `useState`: Allows you to add state to a functional component.
- `useEffect`: Handles side effects in your components, such as data fetching, subscriptions, or manually changing the DOM.
- `useContext`: Allows you to access context values
- `useReducer`: An alternative to useState for managing more complex state logic. It works similarly to Redux but within a component.
- `useRef`: Gives you a way to access and manipulate DOM elements directly or persist values across renders without triggering a re-render.
- `useMemo`: Optimizes performance by memoizing expensive calculations so that they are only re-computed when dependencies change.
-`useCallback`: Returns a memoized version of a callback function, which is useful to prevent unnecessary re-renders of child components that depend on the function.
```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```
- `memo` in React is a higher-order component (HOC) that optimizes the performance of functional components by preventing unnecessary re-renders.
- - When you wrap a component with React.memo, React will compare the current props with the previous ones. If they are the same, React will skip rendering that component and reuse the last rendered output.

- - If any of the props change, the component will re-render as usual.
```javascript
import React from 'react';
const MyComponent = ({ value }) => {
  console.log('Rendering MyComponent');
  return <div>{value}</div>;
};

export default React.memo(MyComponent);
```



