/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1290px",
        },
      },
      fontFamily: {
       "Inter": ["Inter", "serif"],
       'font_grotesk': ["Space Grotesk", "sans-serif"],
      },
      colors:{
        'mainBg':'#F2F1EE',
        'primaryColor':'#000',
        'secondaryColor':'#4B4946',
        'borderColor':'#BFBDB7',
        'btnBg':'#A68468',
      },
      spacing:{
        '190':'190px',
        '314':'314px',
        '410':'410px',
        '520':'520px',
        '585':'585px',
        '630':'630px',
        '655':'655px',
        '687':'687px',
        '714':'714px',
        '770':'770px',
        '805':'805px',
        '850':'850px',
        '860':'860px',
        '1070':'1070px',
      },
      fontSize: {
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '38xl':'38px',
        '40xl':'40px',
        '44xl':'44px',
        '48xl':'48px',
        '50xl':'50px',
        '58xl':'58px',
        '68xl':'68px',
        '98xl':'98px',
        '102xl':'102px',
        '118xl':'118px',
        '168xl':'168px',
      },
      lineHeight: {
        '8': '30px',
        '32':'32px',
        '34':'34px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '50':'50px',
        '54':'54px',
        '58':'58px',
        '68':'68px',
        '98':'98px',
        '112':'112px',
        '118':'118px',
        '168':'168px',
      },
      borderRadius:{
        'R_15':"15px",
        'R_30':"30px",
        'R_100':"100px",
      },
      boxShadow:{
        'shadowSlide':'4px 8px 24px rgba(36, 107, 253, 0.25)'
      },
      backgroundImage:{
        'bgGradient':'radial-gradient(95.09% 118.5% at 43.64% 75.17%,#a2bcff37 45.19%,#768bfc80 86.75%)',
      },
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
        "loop-scroll2": "loop-scroll2 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "loop-scroll2": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
