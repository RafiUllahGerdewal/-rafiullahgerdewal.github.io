import { useState } from 'react'
import { projects } from '../data/portfolio'

export const Projects = () => {
  const [showProgressPopup, setShowProgressPopup] = useState(false)
  const [showContributeModal, setShowContributeModal] = useState(false)
  const [showTwoPearlsModal, setShowTwoPearlsModal] = useState(false)

  const handleAfghanDocsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowProgressPopup(true)
    setTimeout(() => setShowProgressPopup(false), 3000)
  }

  const handleContributeClick = () => {
    setShowContributeModal(true)
    setTimeout(() => setShowContributeModal(false), 3000)
  }

  const handleTwoPearlsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowTwoPearlsModal(true)
    setTimeout(() => setShowTwoPearlsModal(false), 4000)
  }

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300">
            Highlighting my latest work and research projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
          {projects.map((project) => {
            // Get appropriate emoji and click handler based on project
            const getProjectEmoji = (id: string) => {
              switch (id) {
                case 'thamaq': return '🍽️'
                case 'afghandocs': return '📄'
                case 'twopearls': return '📿'
                case 'pashto-summarizer': return '🧠'
                default: return '💻'
              }
            }

            const getClickHandler = (id: string) => {
              switch (id) {
                case 'afghandocs': return handleAfghanDocsClick
                case 'twopearls': return handleTwoPearlsClick
                case 'pashto-summarizer': return handleContributeClick
                default: return undefined
              }
            }

            const clickHandler = getClickHandler(project.id)
            const isOngoing = project.status === 'ongoing'

            return (
              <div key={project.id} className="section-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{getProjectEmoji(project.id)}</span>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {project.title}
                  </h3>
                  {isOngoing && (
                    <span className="px-2 py-1 bg-yellow-600 text-yellow-100 text-xs rounded-full">
                      Ongoing
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {clickHandler ? (
                    <button
                      onClick={clickHandler}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      {project.id === 'afghandocs' ? 'View Live →' : 
                       project.id === 'twopearls' ? 'Learn More →' : 
                       'Contribute Dataset →'}
                    </button>
                  ) : (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Case Study Section */}
        <div className="mt-16 animate-fade-in-up animation-delay-400">
          <div className="section-card text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              Case Studies & Research Journals
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore my research papers, case studies, and technical articles on Medium.
            </p>
            <a
              href="https://rafiullahgerdewal.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read Case Studies
            </a>
          </div>
        </div>
      </div>

      {/* Progress Popup */}
      {showProgressPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-700 animate-fade-in">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-100" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Project in Progress
            </h3>
            <p className="text-gray-300">
              AfghanDocs is currently under development. Check back soon for updates!
            </p>
          </div>
        </div>
      )}

      {/* Contribute Modal */}
      {showContributeModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-700 animate-fade-in">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              Thank You for Your Interest!
            </h3>
            <p className="text-gray-300 mb-4">
              We're building a Pashto NLP dataset. Your contribution will help advance language technology for the Pashto community.
            </p>
            <p className="text-sm text-gray-400">
              Contact: rafiullah.gerdewal@example.com
            </p>
          </div>
        </div>
      )}

      {/* TwoPearls Modal */}
      {showTwoPearlsModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-700 animate-fade-in max-w-md">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">📿</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              TwoPearls - Islamic App
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              A personal Islamic application presenting carefully selected verses (Ayahs) from two Surahs of the Quran. 
              Designed for spiritual reminders and daily reflection with a simple, mobile-friendly interface.
            </p>
            <div className="bg-gray-700 rounded-lg p-3 mb-4">
              <p className="text-gray-300 text-sm">
                <strong>Tech Stack:</strong> React.js, HTML, JavaScript, JSON, Capacitor, Firebase, LocalStorage
              </p>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              The source code is available, but there are alternative options like <strong>Quranly</strong> and <strong>Tarteel</strong> for similar functionality.
            </p>
            <p className="text-sm text-gray-400">
              📧 Contact: <a href="mailto:rafiullah.gerdewal@yahoo.com" className="text-blue-400 hover:text-blue-300">rafiullah.gerdewal@yahoo.com</a>
            </p>
          </div>
        </div>
      )}
    </section>
  )
} 