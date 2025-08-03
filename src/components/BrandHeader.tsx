

export const BrandHeader = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center px-4 py-8 bg-gray-900 overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Logo Container */}
        <div className="relative mb-16">
          {/* Ripple glow effect behind logo */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-indigo-500/20 via-teal-500/20 to-violet-500/20 animate-ripple-glow blur-xl"></div>
          </div>

          {/* Circular Gradient Logo */}
          <div className="relative z-10 mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-indigo-600 via-teal-500 to-violet-600 flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-2xl border-2 border-indigo-400/30 hover:scale-105 transition-all duration-500 hover:shadow-indigo-500/25 hover:shadow-3xl group">
            {/* Soft glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 via-teal-400/20 to-violet-400/20 animate-water-ripple"></div>
            
            {/* Logo initials with floating effect */}
            <div className="relative z-10 animate-water-float">
              <div className="flex items-center justify-center">
                <span className="animate-letter-float inline-block" style={{ animationDelay: '0s' }}>R</span>
                <span className="animate-letter-float inline-block" style={{ animationDelay: '0.5s' }}>G</span>
              </div>
            </div>

            {/* Subtle water droplets */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-3 left-4 w-1 h-1 bg-white rounded-full animate-water-ripple" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-6 right-5 w-0.5 h-0.5 bg-white rounded-full animate-water-ripple" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute bottom-4 left-8 w-0.5 h-0.5 bg-white rounded-full animate-water-ripple" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>

          {/* Horizontal Glowing Line - "Lighted Road" Effect */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-glowing-line rounded-full mt-6"></div>
          
          {/* Additional glow layers for enhanced effect */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent animate-glowing-line rounded-full mt-6" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Ripple/Pulse Effects Beneath the Line */}
        <div className="relative mb-12">
          {/* Multiple ripple circles */}
          <div className="flex justify-center items-center space-x-4">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ripple-glow opacity-60"></div>
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-ripple-glow opacity-40" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-ripple-glow opacity-60" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-ripple-glow opacity-40" style={{ animationDelay: '0.9s' }}></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-ripple-glow opacity-60" style={{ animationDelay: '1.2s' }}></div>
          </div>
        </div>

        {/* Full Name - Elegant Typography */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-4 animate-fade-in-up tracking-tight">
            RafiUllah Gerdewal
          </h1>
          
          {/* Professional Title */}
          <p className="text-lg md:text-xl text-indigo-300 font-medium animate-fade-in-up animation-delay-200">
            Software Developer with a Master's in Computer Science (MSc CS)
          </p>
        </div>

        {/* Specialization Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-400">
          <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
            React
          </span>
          <span className="px-3 py-1 bg-teal-600/20 text-teal-300 text-sm rounded-full border border-teal-500/30">
            Node.js
          </span>
          <span className="px-3 py-1 bg-violet-600/20 text-violet-300 text-sm rounded-full border border-violet-500/30">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
            Firebase
          </span>
          <span className="px-3 py-1 bg-teal-600/20 text-teal-300 text-sm rounded-full border border-teal-500/30">
            MongoDB
          </span>
          <span className="px-3 py-1 bg-violet-600/20 text-violet-300 text-sm rounded-full border border-violet-500/30">
            AI Tools
          </span>
        </div>

        {/* Subtle description */}
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
          Specializing in modern web applications with a focus on scalable architecture, 
          AI-enhanced tools, and creating meaningful user experiences.
        </p>
      </div>
    </header>
  )
} 