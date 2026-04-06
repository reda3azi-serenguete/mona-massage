# 5-ELEMNTS Project Guidelines

Welcome to the 5-ELEMNTS project! This document establishes project-wide standards and guidelines for maintaining code quality, consistency, and best practices.

## 🎯 Project Mission

Build a modern, scalable React application using production-grade standards and practices.

## 📋 Code Quality Standards

### TypeScript
- Always use strict TypeScript mode
- Avoid `any` types—use proper type inference or explicit typing
- Use interfaces for component props and data structures
- Define shared types in `src/lib/types.ts`
- Create proper error handling and null checks

### React Components
- Use functional components with hooks (no class components)
- Extract custom hooks to `src/hooks/` when reusable
- Keep components small and focused (single responsibility)
- Memoize expensive components with `React.memo` when needed
- Use proper dependency arrays in `useEffect`, `useMemo`, `useCallback`
- Avoid prop drilling—use Context API or state management when appropriate

### Styling with Tailwind CSS
- Use Tailwind utility classes by default
- Create custom CSS only when Tailwind classes are insufficient
- Use CSS custom variables for design tokens (colors, spacing, etc.)
- Keep component-specific styles in `.css` files next to components
- Maintain responsive design best practices
- Ensure proper contrast ratios for accessibility

### File Organization
```
src/
  ├── components/
  │   ├── common/           # Reusable UI components
  │   ├── layout/           # Layout components
  │   └── [Feature]/        # Feature-specific components
  ├── pages/               # Page-level components
  ├── hooks/               # Custom React hooks
  ├── lib/
  │   ├── types.ts         # Shared TypeScript types
  │   ├── utils.ts         # Utility functions
  │   └── api.ts           # API integration
  ├── styles/              # Global styles
  └── main.tsx             # Entry point
```

### Naming Conventions
- **Components**: PascalCase (`UserProfile.tsx`)
- **Folders**: kebab-case (`user-profile/`)
- **Functions/variables**: camelCase (`getUserData()`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **CSS classes**: kebab-case (`.card-header`)

## 🔍 Code Review Checklist

Before committing, ensure:
- ✅ TypeScript compiles without errors
- ✅ No ESLint warnings (or documented exceptions)
- ✅ Components are properly typed
- ✅ No console errors or warnings
- ✅ Responsive design tested
- ✅ Accessibility (a11y) considered
- ✅ Performance optimizations applied where needed
- ✅ Meaningful commit messages

## 🤖 Using the Frontend Code Reviewer Agent

This project has access to the **Frontend Code Reviewer** agent for production-level code analysis. Use it to:

```
"Review [ComponentName] for performance and best practices"
"Check CSS/Tailwind usage in [filename]"
"Audit TypeScript types in [file or folder]"
"Identify potential UX/UI issues in [component]"
```

The agent will provide detailed analysis without making changes, giving you full control.

## 📦 Dependencies

Manage dependencies carefully:
- Document why new dependencies are added
- Prefer built-in solutions over large libraries
- Keep bundle size in mind
- Regularly audit for security vulnerabilities (`npm audit`)

## 🚀 Performance Best Practices

- Use React DevTools Profiler to identify bottlenecks
- Code split with `React.lazy()` for routes
- Optimize images and assets
- Minimize bundle size
- Avoid unnecessary re-renders

## ♿ Accessibility Standards

- Semantic HTML (proper heading hierarchy, landmarks)
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1 for normal text
- Focus states visible for all interactive elements
- Alternative text for images

## 📝 Commit Messages

Use conventional commits:
```
feat: Add user authentication
fix: Resolve button click handler
docs: Update API documentation
style: Reformat code
refactor: Extract UserCard component
test: Add unit tests for utils
```

## 🔗 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

Last updated: April 2026
