# React Router — What I implemented

Purpose: notes about the routing features I implemented in this project to learn client-side navigation with React Router.

What I implemented
- App-level router using BrowserRouter to enable SPA navigation.
- Route definitions with Routes and Route for:
  - Home, About, Contact and other main pages.
  - Nested routes (parent layout + child routes) to share UI (headers/sidebars).
  - Dynamic routes using path params (e.g., /users/:id) and reading params with useParams.
- Navigation elements:
  - Links and NavLink for navigation with active link styles.
  - Programmatic navigation using useNavigate (redirect after actions, form submit).
- Route guards / protected routes:
  - Simple auth check wrapper (RequireAuth) that redirects unauthenticated users to a login page.
  - Storing auth state in context or Redux, then protecting routes based on that state.
- Lazy loading & code-splitting:
  - React.lazy + Suspense for route-based chunking to improve initial load.
- 404 / Not Found route:
  - Catch-all route (*) that renders a NotFound component when no route matches.
- Query params & location:
  - Reading query strings via useLocation and URLSearchParams for filtering/search pages.
- Scroll/restoration & UX:
  - Basic scroll-to-top on navigation or preserving scroll for specific pages (small helper).
- Practical examples in the project:
  - Demo components showing links, nested layouts, dynamic user detail page, protected dashboard.
  - Simple login flow that demonstrates redirect after login.

What I learned
- Router basics: how BrowserRouter, Routes and Route work together.
- Differences between Link and NavLink and when to use each.
- Handling dynamic params and validating them in components.
- How to implement protected routes and redirect flows.
- Benefits of lazy-loading route components for performance.
- How routing state (location, params, query) can be used to drive UI and data loading.
- Common pitfalls: forgetting to wrap app with Provider/Router, relying on hard refresh for client routes.

How to run (Windows)
- cd <your folder>
- npm install
- npm start

Next improvements I may implement
- Add route transition animations.
- Integrate React Router with data fetching (loader patterns or RTK Query).
- Improve accessibility for route changes (focus management, ARIA-live announcements).