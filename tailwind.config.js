/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["Jakarta-Bold", "sans-serif"],
        JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
        JakartaLight: ["Jakarta-Light", "sans-serif"],
        JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
   colors: {
  primary: {
            100: "#E0F7F7", 
            200: "#B3E5E5",
            300: "#80D3D3",
            400: "#4DC1C1",
            500: "#008080", // Base color
            600: "#006666",
            700: "#005151", 
            800: "#003B3B",
            900: "#002626", 
ssecondary: {
          100: "#FFECE9", 
          200: "#FFD2CC",
          300: "#FFB3A9",
          400: "#FF9587",
          500: "#FF6F61", // Base color
          600: "#E66057",
          700: "#B34A45",
          800: "#803536",
          900: "#4D2023", 
  },
        success: {
          100: "#F0FFF4",
          200: "#C6F6D5",
          300: "#9AE6B4",
          400: "#68D391",
          500: "#38A169",
          600: "#2F855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        danger: {
          100: "#FFF5F5",
          200: "#FED7D7",
          300: "#FEB2B2",
          400: "#FC8181",
          500: "#F56565",
          600: "#E53E3E",
          700: "#C53030",
          800: "#9B2C2C",
          900: "#742A2A",
        },
        warning: {
          100: "#FFFBEB",
          200: "#FEF3C7",
          300: "#FDE68A",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
        general: {
    100: "#E7EBEC", 
    200: "#C1CBCF",
    300: "#9BABAD",
    400: "#768B8E",
    500: "#2A3D45", // Base color
    600: "#233037", 
    700: "#1C242A", 
    800: "#15191D",
    900: "#0D0F11", 
  },
      },
    },
  },
  },
  plugins: [],
}
};
