# Vite + Vanilla JS + Tailwind CSS Starter

A minimal, fast, and modern starter template for building static websites with Vite, Vanilla JavaScript, and Tailwind CSS. Perfect for developers who want to quickly prototype or build lightweight web projects without the overhead of frameworks.

## ✨ Features

- ⚡ **Lightning Fast**: Powered by Vite for instant hot module replacement
- 🎨 **Tailwind CSS**: Pre-configured utility-first CSS framework
- 📦 **Vanilla JavaScript**: No framework dependencies, pure JS
- 🏗️ **Modern Build Tools**: ES6+ support with automatic bundling
- 🔧 **Developer Friendly**: Clean project structure and easy customization
- 📱 **Responsive Ready**: Mobile-first approach with Tailwind
- 🚀 **Production Ready**: Optimized build output for deployment

## 🚀 Quick Start

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 16 or higher) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/theAvinashdev/vite-vanilla-tailwind-starter.git
   cd vite-vanilla-tailwind-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see your project running!

## 📁 Project Structure

```
vite-vanilla-tailwind-starter/
├── src/
│   ├── main.js          # Main JavaScript entry point
│   ├── style.css        # Main CSS file with Tailwind imports
│   └── assets/          # Static assets (images, fonts, etc.)
├── index.html           # Main HTML template
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🎨 Customization

### Tailwind CSS

- Modify `tailwind.config.js` to customize your design system
- Add custom utilities in `src/style.css`
- Extend colors, fonts, spacing, and more

### Vite Configuration

- Update `vite.config.js` for build optimizations
- Add plugins for additional functionality
- Configure path aliases and environment variables

## 🚀 Deployment

After running `npm run build`, your optimized site will be in the `dist/` folder, ready for deployment to:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use GitHub Actions or manual upload
- **Any static hosting**: Upload the `dist` folder contents

## 📚 What's Included

- Vite development server with HMR
- Tailwind CSS with PostCSS processing
- Modern JavaScript (ES6+) support
- Automatic CSS purging for production
- Optimized build with code splitting
- Asset optimization and bundling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- The amazing open-source community

---

**Happy Coding!** 🎉

If you find this starter helpful, please consider giving it a ⭐ on GitHub!
