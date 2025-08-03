import { heroData, contactData } from '../data/portfolio'
import { useState } from 'react'

export const Hero = () => {
  const [showFact, setShowFact] = useState(false)
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Responsive Avatar/Image Container with Glowing Effects */}
        <div className="flex justify-center items-center mb-12 relative">
          {/* Ripple Glow Effect */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-ripple-glow blur-sm"></div>
          </div>
          
          {/* Glowing Line Effect */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-glowing-line rounded-full mt-4"></div>
          
          <div className="w-full max-w-4xl h-auto relative z-10">
            {heroData.avatar ? (
              // Responsive Image - same size as initials
              <img
                src={heroData.avatar}
                alt={`${heroData.name} avatar`}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-2xl animate-fade-in object-cover border-2 border-gray-600"
              />
            ) : (
              // Fallback to initials with responsive sizing and watery animations
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-2xl animate-fade-in border-2 border-gray-600 hover:scale-105 transition-transform duration-300 hover:shadow-blue-500/25 hover:shadow-3xl group relative overflow-hidden">
                {/* Water ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-water-ripple rounded-full"></div>
                
                {/* Main circle with water float effect */}
                <div className="relative z-10 animate-water-float">
                  {/* Individual letters with floating effect */}
                  <div className="flex items-center justify-center">
                    <span className="animate-letter-float inline-block" style={{ animationDelay: '0s' }}>R</span>
                    <span className="animate-letter-float inline-block" style={{ animationDelay: '0.5s' }}>G</span>
                  </div>
                </div>
                
                {/* Additional water droplets effect */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full animate-water-ripple" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-4 right-4 w-0.5 h-0.5 bg-white rounded-full animate-water-ripple" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute bottom-3 left-6 w-0.5 h-0.5 bg-white rounded-full animate-water-ripple" style={{ animationDelay: '1.2s' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Name with Click Effect */}
        <div className="relative mb-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in-up tracking-tight cursor-pointer select-none hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
            onClick={() => setShowFact(!showFact)}
          >
            RafiUllah Gerdewal
          </h1>
          
          {/* NY Times Style Fact Box - Appears on Click */}
          {showFact && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-white text-black rounded-lg shadow-lg border-l-4 border-red-600 max-w-sm z-50 animate-fade-in-up">
              <div className="text-xs uppercase tracking-wider text-red-600 font-bold mb-1">
                Did You Know?
              </div>
              <p className="text-sm leading-relaxed font-serif">
                An average person makes about <span className="font-bold">428 clicks per day</span>, 
                according to recent studies on digital interaction patterns.
              </p>
              <div className="text-xs text-gray-500 mt-2 italic">
                — Digital Interaction Research
              </div>
              {/* Arrow pointing up */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
            </div>
          )}
        </div>

        {/* Professional Subtitle */}
        <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-4 font-medium animate-fade-in-up animation-delay-200">
          Software Developer with a Master's in Computer Science (MSc CS)
        </p>

        {/* Location */}
        {heroData.location && (
          <p className="text-base text-gray-600 dark:text-gray-400 mb-12 animate-fade-in-up animation-delay-300">
            📍 {heroData.location}
          </p>
        )}

        {/* Focus Areas */}
        <p className="text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed animate-fade-in-up animation-delay-400">
          <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">
            React • Node.js • TypeScript • Firebase • AI/ML
          </code>
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
          <a
            href={contactData.socialLinks.find(s => s.name === 'LinkedIn')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-lg"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>

          <a
            href={contactData.socialLinks.find(s => s.name === 'GitHub')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-gray-300 font-medium transition-colors duration-300 text-lg"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
          <a
            href={`mailto:${contactData.email}`}
            className="btn-primary text-lg px-8 py-3"
          >
            Get In Touch
          </a>
          
          <a
            href="#projects"
            className="btn-secondary text-lg px-8 py-3"
          >
            View Projects
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-8 animate-fade-in-up animation-delay-1000">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            📧 Email: {contactData.email} | 📱 Phone: +91 9611790922
          </p>
        </div>
      </div>
      

      

    </section>
  )
} 