# Blueprint: Fake News Detector (VeriTruth)

## Overview
VeriTruth is a sophisticated AI-powered web application designed to combat misinformation, specifically focusing on news articles. It allows users to input URLs and receive an instant analysis of the content's authenticity. The app leverages the Gemini API to identify bias, factual errors, and common manipulation tactics.

## Project Structure
*   `index.html`: Main entry point and layout shell.
*   `style.css`: Modern, polished styling using CSS variables, oklch colors, and responsive design.
*   `main.js`: Core application logic, including UI state management and AI integration.
*   `blueprint.md`: This document.

## Features & UI/UX
1.  **Immersive Landing Page:**
    *   Trust-building aesthetic (Deep Blue/Teal palette).
    *   **Secure API Key Entry:** A settings modal or header field to input the Gemini API key, stored in session memory for security.
2.  **Analysis Phase:**
    *   Dynamic animations (scanning beams, progress pulses).
3.  **Comprehensive Results:**
    *   **Truth Score:** A visual gauge (0-100%).
    *   **Authenticity Badge:** Clear "REAL" or "FAKE" indicator.
    *   **AI Insights:** A concise summary of why the content is flagged.
    *   **News Context:** Analysis of the publisher's reputation and factual history.

## Technical Implementation
*   **Frontend:** Vanilla JavaScript with ES Modules.
*   **AI:** Gemini 1.5 Flash API via the `@google/generative-ai` SDK (loaded from CDN).
*   **Prompting:** Specialized system prompts focused on news literacy and fact-checking principles.

## Current Progress
- [x] Research and Planning
- [x] Initial Architecture Design
- [x] UI Shell Implementation
- [x] AI Integration
- [x] Visual Polish & Animations
