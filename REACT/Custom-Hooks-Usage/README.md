# Custom Hooks — What I learned

Purpose: a small demo project to practice creating and using custom React hooks by extracting reusable stateful logic.

What this project contains
- src/hooks/UseCounter.jsx — a custom hook that manages a counter (count, increment, decrement, reset).
- Simple demo components that import and use UseCounter to show real usage patterns.

What I learned (key points)
- Reason to create custom hooks
  - Extract and reuse stateful logic across components.
  - Keep components focused on UI while hooks handle behavior.

- Hook implementation fundamentals
  - useState inside hooks to manage local state.
  - Returning a clear API (state + action functions) so components remain readable.
  - Choosing object vs array return shapes for clarity and destructuring.

- Practical behavior & pitfalls
  - Initial values: how the initial argument is used and the implications for reset.
  - Stale closures: be aware when using state values inside functions; prefer functional updates when needed (setCount(c => c + 1)).
  - Avoid side effects directly in hooks unless documented; prefer useEffect for effects.

- Composition & reuse
  - Hooks can call other hooks and be composed to build more complex behaviors.
  - Keep hooks small and focused so they can be recombined.

- Testing and improvement ideas
  - How to unit-test hooks (React Testing Library + @testing-library/react-hooks or equivalent).
  - Adding TypeScript types for safer hook APIs.
  - Improving API ergonomics (optional callback support, step size, bounds).

Practical takeaways
- Custom hooks improve code reuse and readability.
- Prefer functional state updates to avoid stale-value bugs in event handlers.
- Document hook contracts (expected args, return shape, side effects).

How to run (Windows)
- Open PowerShell or Command Prompt:
  - cd <your folder>
  - npm install
  - npm start

Next steps I plan to try
- Add unit tests for UseCounter.
- Convert hooks to TypeScript and add types.
- Create more example hooks (useToggle, useLocalStorage, useFetch) and show composition.