export const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-4">
            🏅 Awards & Achievements
          </h2>
          <p className="text-gray-300">
            Recognition for contributions to technology, education, and humanitarian initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-200">
          {/* Awards Card */}
          <div className="section-card">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏆</span>
              <h3 className="text-lg font-semibold text-gray-100">
                Awards & Recognition
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">🇮🇳</span>
                <span>ICCR & SAARC Nations Awards recipient</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">🗣️</span>
                <span>Delivered a TED Talk on self-growth and education</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">🎓</span>
                <span>Active in public speaking and English teaching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">🌐</span>
                <span>Recognized for humanitarian and technology outreach</span>
              </li>
            </ul>
          </div>

          {/* Full List Card */}
          <div className="section-card">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📋</span>
              <h3 className="text-lg font-semibold text-gray-100">
                Complete Portfolio
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              View the complete list of awards, distinctions, and evidence of achievements.
            </p>
            <a
              href="https://rafiullahgerdewal.github.io/Distinctions/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              View Full List of Awards
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
          <div className="section-card">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              Impact & Contributions
            </h3>
            <p className="text-gray-300 leading-relaxed">
              From delivering TED Talks on education and self-empowerment to contributing to open-source 
              and humanitarian initiatives, my work spans technology, education, and community development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 