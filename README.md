## About This Project

This is a fully functional **Next.js 14** web application demonstrating modern frontend development practices:

### :rocket: Features
- **Home Page:** Hero slider with animated gradients, feature cards, and CTA buttons.
- **Providers Page:** Dynamic table with search, filter, and sorting functionality.
- **Responsive Navbar:** Optimized for mobile with toggle menu.
- Modern **gradient backgrounds**, hover effects, and consistent spacing for better UX.
- Overlay sections with gradient backgrounds for improved text readability.

### :brain: What we Learned
- Structuring a **Next.js App Router** project efficiently.
- Creating reusable components with **shadcn/ui** and **TailwindCSS**.
- Implementing **dynamic tables** with search, filter, and sort.
- Applying **responsive design** across devices.
- Using **Framer Motion** for smooth animations.
- Building **image sliders** with `useEffect` and `useState`.

### :gear: Challenges & Solutions

| Challenge | Solution |
|-----------|---------|
| Image responsiveness in the slider | Used `fill` property and Tailwind height classes (`h-[450px] sm:h-[600px] lg:h-[90vh]`). |
| Text readability on bright images | Added a `bg-gradient-to-r from-black/60` overlay. |
| Layout stretching on large screens | Applied consistent padding (`px-6 sm:px-12 lg:px-32`) and max-width limits. |
| Responsive providers table | Used `overflow-x-auto` for horizontal scrolling. |
| Managing search/filter state | Combined `useState` hooks with conditional filtering logic. |
| Consistent design & spacing | Created shared Tailwind utility classes and flex/grid layouts. |
| Integrating shadcn/ui | Customized the theme after studying documentation. |

### :white_check_mark: Result
A **clean, responsive, and user-friendly web app** showcasing practical skills in **Next.js**, **React**, and **modern frontend development**.
