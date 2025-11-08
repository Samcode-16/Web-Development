# React + Redux — What I learned

Purpose: notes from learning state management with Redux in React projects and practical patterns applied.

What this project / folder demonstrates
- Integrating Redux with React using react-redux (Provider, useSelector, useDispatch).
- Typical Redux pieces: actions, reducers, store, middleware.
- Usage patterns with modern Redux Toolkit (configureStore, createSlice, createAsyncThunk, RTK Query).

Key concepts I learned
- Single source of truth: app state lives in a central store.
- Actions and reducers: actions describe "what happened", reducers produce the next state (pure functions).
- Immutability: always return new state objects; use immutable helpers or Immer (built into Redux Toolkit).
- Middleware for side effects: redux-thunk for simple async flows, redux-saga for more complex flows.
- Async data flows: dispatch pending/fulfilled/rejected states; pattern with createAsyncThunk.
- React-Redux bindings:
  - Provider wraps the app to expose the store.
  - useSelector to read slices of state, useDispatch to send actions.
  - connect HOC vs hooks: hooks are preferred in modern code.
- Selectors and performance:
  - Keep selectors focused; use reselect for memoization to avoid unnecessary re-renders.
  - Normalize nested data (by id) to simplify updates and selectors.
- Folder structure and organization:
  - Group by feature (ducks pattern) or by domain; keep actions/reducers/selectors together (slices).
  - Keep reusable logic in middleware or thunks.
- Testing:
  - Reducers are easy to unit test (pure functions).
  - Test async actions with mocked stores or use RTK's utilities.
- Debugging tools:
  - Redux DevTools for action/state inspection and time travel.
  - Logging middleware for development.

Practical takeaways / best practices
- Prefer Redux Toolkit for less boilerplate and safer patterns (createSlice, Immer).
- Avoid storing derived UI state in Redux; keep minimal global state.
- Use memoized selectors and slice-level selectors for performance.
- Keep side effects out of reducers; implement them in thunks/sagas or RTK Query.
- Write small, focused slices and reuse selectors across components.

How to run examples (Windows)
- cd <your folder>
- npm install
- npm start

Next steps I plan
- Convert more examples to Redux Toolkit and RTK Query.
- Add unit and integration tests for slices and async flows.
- Explore advanced middleware patterns and performance tuning.