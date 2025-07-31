export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center animate-fade-in-up">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            © {new Date().getFullYear()} RafiUllah Gerdewal. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
            <span>Made with ❤️</span>
            <span>•</span>
            <span>Deployed on GitHub Pages</span>
            <span>•</span>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 