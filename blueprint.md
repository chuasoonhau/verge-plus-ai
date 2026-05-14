
# Blueprint: Toto Random Number Generator

## Overview

This application is a Toto random number generator built using modern web standards. It features a custom Web Component for generating and displaying unique numbers, and now includes a Day/Night mode for enhanced user experience and accessibility.

## Project Structure

*   `index.html`: Main entry point and layout.
*   `main.js`: Contains the `<toto-generator>` and `<theme-toggle>` Web Components and theme switching logic.
*   `style.css`: Defines global styles, theme variables, and layout for fixed elements.
*   `blueprint.md`: Project documentation and roadmap.

## Implementation Details

### Current State
*   Framework-less implementation using Web Components.
*   Responsive UI with Day/Night mode support.
*   Persistent theme settings using `localStorage` and system preference detection.
*   Modern styling with `oklch` colors, `Inter` font, and custom animations.

### Troubleshooting Notes
*   **Toggle Visibility:** Fixed by ensuring high `z-index`, explicit sizing, and moving the script tag to the head with `defer` for reliable component registration.
*   **Template Literals:** Fixed an issue where JavaScript template literals were incorrectly escaped during deployment.

## Steps Taken

1.  **UI/UX Overhaul:** Implemented a new design with better spacing, typography (Inter), and visual effects (noise texture, shadows).
2.  **Theming Engine:** Created a robust system using CSS variables and a `[data-theme]` attribute.
3.  **Component Refactoring:** Updated `<toto-generator>` and created `<theme-toggle>` as encapsulated Web Components.
4.  **Stability Fixes:** Ensured components register correctly and are visible on top of all other layers.
