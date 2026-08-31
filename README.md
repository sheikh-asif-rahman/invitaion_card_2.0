================================================================================
                    🎉 INVITATION CARD APP - README
================================================================================

A beautiful, animated invitation card built with React + TypeScript + Tailwind CSS 
+ Framer Motion.

================================================================================
                        📋 PREREQUISITES
================================================================================

- Node.js (v16 or higher)
- npm (v8 or higher)
- VS Code (with recommended extensions)

================================================================================
                        🚀 INSTALLATION PROCESS
================================================================================

STEP 1: Create Vite React + TypeScript Project
--------------------------------------------------------------------------------
npm create vite@latest invitation-card -- --template react-ts
cd invitation-card


STEP 2: Install Dependencies
--------------------------------------------------------------------------------
npm install


STEP 3: Install Tailwind CSS
--------------------------------------------------------------------------------
npm install -D tailwindcss@3.4.0 postcss@8.4.31 autoprefixer@10.4.16


STEP 4: Install Framer Motion
--------------------------------------------------------------------------------
npm install framer-motion


STEP 5: Create Configuration Files
--------------------------------------------------------------------------------

Create "tailwind.config.js" in project root:
---------------------------------------------
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Create "postcss.config.js" in project root:
---------------------------------------------
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


STEP 6: Update src/index.css
--------------------------------------------------------------------------------
@tailwind base;
@tailwind components;
@tailwind utilities;


STEP 7: Update src/main.tsx
--------------------------------------------------------------------------------
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

================================================================================
                        🔧 VS CODE SETUP
================================================================================

IMPORTANT: Fix CSS Validation Errors (Red Squiggly Lines)
--------------------------------------------------------------------------------

STEP 1: Open VS Code Settings
- Press Ctrl + , (Comma) to open Settings
- Or go to File > Preferences > Settings

STEP 2: Disable CSS Validation
- In the search bar, type: "CSS: Validate"
- UNCHECK the box for "CSS: Validate"
- This disables built-in CSS validation

STEP 3: Disable SCSS Validation
- In the search bar, type: "SCSS: Validate"  
- UNCHECK the box for "SCSS: Validate"
- This disables built-in SCSS validation

STEP 4: Keep Tailwind Validation ON
- In the search bar, type: "Tailwind CSS: Validate"
- MAKE SURE this is CHECKED (enabled)
- This allows Tailwind IntelliSense to work properly

STEP 5: Reload VS Code
- Press Ctrl + Shift + P
- Type "Developer: Reload Window"
- Press Enter

Install Extensions:
--------------------------------------------------------------------------------
1. Tailwind CSS IntelliSense (by Brad Cornes)
2. ES7+ React/Redux/React-Native snippets

Create ".vscode/settings.json":
--------------------------------------------------------------------------------
{
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "tailwindCSS.validate": true,
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "javascriptreact": "javascriptreact",
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.emmetCompletions": true,
  "files.associations": {
    "*.css": "tailwindcss"
  }
}

Create ".vscode/extensions.json":
--------------------------------------------------------------------------------
{
  "recommendations": [
    "bradlc.vscode-tailwindcss"
  ]
}

================================================================================
                        🏃‍♂️ RUN THE APP
================================================================================

npm run dev

Visit: http://localhost:5173

================================================================================
                        📦 PACKAGE.JSON DEPENDENCIES
================================================================================

{
  "dependencies": {
    "framer-motion": "^13.1.1",
    "react": "^19.2.8",
    "react-dom": "^19.2.8"
  },
  "devDependencies": {
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.4",
    "@vitejs/plugin-react": "^6.1.0",
    "autoprefixer": "^10.4.16",
    "oxlint": "^1.79.0",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.4.0",
    "typescript": "~6.0.2",
    "vite": "^8.2.2"
  }
}

================================================================================
                        📁 PROJECT STRUCTURE
================================================================================

invitation-card/
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── README.txt

================================================================================
                        🛠️ COMMON COMMANDS
================================================================================

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check installed packages
npm list

# Fix security vulnerabilities
npm audit fix

================================================================================
                        🐛 TROUBLESHOOTING
================================================================================

PROBLEM: Red Squiggly Lines under @tailwind in index.css
SOLUTION:
- Go to VS Code Settings (Ctrl + ,)
- Search for "CSS: Validate" and UNCHECK it
- Search for "SCSS: Validate" and UNCHECK it
- Make sure "Tailwind CSS: Validate" is CHECKED
- Reload VS Code window (Ctrl+Shift+P > Reload Window)
- Install Tailwind CSS IntelliSense extension

PROBLEM: Tailwind Classes Not Working
SOLUTION:
- Check if tailwind.config.js exists
- Verify postcss.config.js is configured
- Delete node_modules and reinstall:
  
  Remove-Item -Recurse -Force node_modules
  Remove-Item -Force package-lock.json
  npm install

PROBLEM: TypeScript Errors
SOLUTION:
- Make sure all files use .tsx extension
- Check tsconfig.json configuration

PROBLEM: npm ERR! could not determine executable to run
SOLUTION:
- npm cache clean --force
- Delete node_modules and reinstall
- Check Node.js version (should be v16+)

================================================================================
                        📚 RESOURCES
================================================================================

- Vite Documentation: https://vitejs.dev/
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Framer Motion Documentation: https://www.framer.com/motion/
- React Documentation: https://react.dev/

================================================================================
                        📝 LICENSE
================================================================================

MIT

================================================================================
                        👨‍💻 CREATED BY
================================================================================

[Your Name]

================================================================================
                        🎉 HAPPY CODING!
================================================================================#   i n v i t a i o n _ c a r d _ 2 . 0  
 