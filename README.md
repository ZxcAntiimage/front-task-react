# Numeric Input Component & Person Management App

This project is a solution for a front-end technical assessment focused on implementing an adaptive numeric input component based on a provided Figma design. It has been scaled into a full Single Page Application (SPA) using modern production-ready architectural practices.

![Figma Preview](./public/img.png)

## 🎯 Goal
Create an isolated, reusable numeric input component that fully satisfies all functional and visual requirements specified in the project brief.

### 📋 Functional Requirements
- **Digits Only**: Users can only input numeric digits (letters and special characters are automatically blocked).
- **Digit Grouping**: Groups of 3 digits are automatically separated by spaces for better readability (`"1442"` → `"1 442"`).
- **Adaptive Width**: The input component dynamically scales its width based on the entered value, starting from a minimum of `72px` up to the maximum layout constraints (`113px`).
- **Placeholder State**: When empty, a grey `placeholder="0"` is displayed. Once a user starts typing, the font color dynamically switches to the primary brand dark color.

### 🎨 Design & UI Requirements
- Pixel-perfect implementation matching the provided [Figma Design](https://figma.com).
- Strict adherence to the design system: fonts, borders, border-radius, and custom color palette (e.g., `#1E0E4C` for active text and brand violet for highlights/focus states).

---

## 🏗️ Architecture & Production-Ready Improvements
To elevate this project to a true **"production-ready"** state as allowed by the guidelines, the initial structure was completely refactored:

1. **Feature-Sliced Design (FSD)**: The codebase is fully refactored into layers and segments following the FSD methodology (`pages`, `widgets`, `features`, `entities`, `shared`). This guarantees strict isolation of business logic and prevents high coupling between components.
2. **"Thin" Pages**: The `pages` layer (`PeopleEdit`, `PersonList`, `Settings`) has been stripped of complex UI layouts and logic. Pages serve strictly as composition layers for widgets and routing entry points.
3. **Global State Management**: User state and mutations are managed externally via **Zustand**, ensuring lightweight, predictable, and performant state updates.
4. **Strict Typing**: Built entirely with **TypeScript**, enforcing strict types for data models (`Person`, `AppState`) and React event handlers.

---

## 🛠️ Tech Stack
- **React 19** & **TypeScript**
- **Vite** (Next-generation frontend tooling)
- **Zustand** (State management)
- **React Router DOM v6** (Client-side routing)
- **Tailwind CSS** (Utility-first styling)

---

## 📦 Project Structure (FSD)
```text
src/
├── app/                  # Application initialization (providers, global styles)
├── pages/                # Composition pages (PeopleListPage, PersonEditPage, SettingsPage)
├── widgets/              # Self-contained, major UI blocks (lists, detail cards)
├── features/             # Interactive user scenarios (PersonEdit form, Age filtering)
├── entities/             # Domain business models (Person interface, core selectors)
└── shared/               # Reusable utilities, shared UI-kit, and base styles
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <project-folder-name>
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```
The application will be running locally at the address outputted in your terminal (typically `http://localhost:5173`).
