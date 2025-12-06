/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        rental: {
          "primary": "#2563EB", // Professional Blue (Blue-600)
          "primary-content": "#ffffff",
          
          "secondary": "#64748B", // Slate-500
          "secondary-content": "#ffffff",
          
          "accent": "#0EA5E9", // Sky-500
          "accent-content": "#ffffff",
          
          "neutral": "#1F2937", // Gray-800
          "neutral-content": "#ffffff",
          
          "base-100": "#ffffff",
          "base-200": "#F3F4F6", // Gray-100 (Soft background)
          "base-300": "#E5E7EB", // Gray-200 (Borders)
          "base-content": "#1F2937", // Gray-800 (Text)
          
          "info": "#3ABFF8",
          "success": "#16A34A", // Green-600
          "warning": "#D97706", // Amber-600
          "error": "#DC2626", // Red-600
        },
      },
      "light",
    ],
  },
}

