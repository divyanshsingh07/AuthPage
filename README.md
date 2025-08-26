# PopX Auth UI (React + Vite)

A clean, componentized implementation of the PopX authentication flow. Screens include Welcome, Sign In, Create Account, Account Settings, and Success.

## Features
- Componentized pages in `src/Componenets/` (Welcome, SignIn, CreateAccount, AccountSettings, Success, Navigation)
- Tailwind-style utility classes for styling
- React Icons for inputs and success/home actions
- Consistent page height with flexible container layout

## Tech Stack
- React + Vite
- JavaScript (ESNext)
- Tailwind-style utilities (pre-configured)
- react-icons

## Getting Started
```bash
npm i
npm run dev
```
Then open the dev server URL printed in the terminal.

## Project Structure
```
src/
  Componenets/
    AccountSettingsPage.jsx
    CreateAccountPage.jsx
    Navigation.jsx
    SignInPage.jsx
    SuccessPage.jsx
    WelcomePage.jsx
  App.jsx
  main.jsx
  index.css
  App.css
```

## Notes
- Email placeholder/display uses: `arsh8004105292@gmail.com`
- Password fields include show/hide toggles
- You can change initial page/state in `src/App.jsx`

## Scripts
- `npm run dev`: start the Vite dev server
- `npm run build`: production build
- `npm run preview`: preview the production build
