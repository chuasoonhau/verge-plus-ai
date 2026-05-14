# Blueprint: The Verve

## Overview
The Verve is a modern, high-intensity editorial news platform built with React, Vite, and TypeScript. It features bold brutalist typography, a sophisticated grid layout, and an integrated AI analysis engine.

## Project Structure
*   `src/`: Main source code directory.
    *   `components/`: Reusable React components (Header, Hero, NewsFeed, Sidebar, DisqusForum, etc.).
    *   `App.tsx`: Main application component managing global state.
    *   `main.tsx`: Entry point for React.
*   `index.html`: Main HTML template.
*   `package.json`: Project dependencies and scripts.
*   `vite.config.ts`: Vite configuration.
*   `tsconfig.json`: TypeScript configuration.

## Technical Stack
*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Animation:** Motion (formerly Framer Motion)

## Integrated Features: VeriTruth AI
This application now includes an integrated **VeriTruth AI Analysis** engine.
*   **Simulation Mode:** The AI logic operates in simulation mode, providing high-fidelity mock analysis results without requiring a Gemini API key.
*   **Article Verification:** Every news article in the feed can be instantly verified using the "Verify with AI" action.
*   **Brutalist UI:** The analysis results are presented in a custom-built modal that matches the "The Verge"-inspired brutalist aesthetic of The Verve.
*   **Advanced UX:** Includes scanning animations, interactive truth score gauges, and detailed AI insights.

## Community Features
*   **Disqus Forum:** A fully integrated community discussion board at the bottom of the content feed, allowing for user engagement and discussion.
