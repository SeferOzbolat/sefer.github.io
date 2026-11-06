module.exports = {
  content: ["./index.html", "./404.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          base: '#090a0c',
          surface: '#111317',
          card: '#16191f',
          border: '#262a35',
          subtle: '#3b4252'
        },
        accent: {
          cyan: '#38bdf8',
          silver: '#e2e4e9',
          muted: '#8b949e'
        }
      }
    }
  }
}