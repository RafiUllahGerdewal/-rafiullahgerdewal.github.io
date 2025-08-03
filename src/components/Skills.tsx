

export const Skills = () => {
  // Filter to only show the specified skills
  const filteredSkills = [
    { name: 'React', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Firebase', category: 'database' },
    { name: 'Firestore', category: 'database' },
    { name: 'Tesseract.js', category: 'other' },
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'Git', category: 'devops' },
    { name: 'ChatGPT APIs', category: 'other' },
    { name: 'OCR', category: 'other' },
    { name: 'AI Summarization', category: 'other' }
  ]

  const categories = {
    frontend: filteredSkills.filter(s => s.category === 'frontend'),
    backend: filteredSkills.filter(s => s.category === 'backend'),
    database: filteredSkills.filter(s => s.category === 'database'),
    devops: filteredSkills.filter(s => s.category === 'devops'),
    other: filteredSkills.filter(s => s.category === 'other')
  }

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-300">
            Core technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
          {Object.entries(categories).map(([category, skillsList]) => (
            <div key={category} className="section-card">
              <h3 className="text-lg font-semibold text-gray-100 mb-4 capitalize">
                {category === 'other' ? 'AI & Tools' : category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What I Do Summary */}
        <div className="mt-16 animate-fade-in-up animation-delay-400">
          <div className="section-card text-center">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              What I Do
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I build scalable web applications using modern technologies, with expertise in AI integration, 
              document processing, and low-resource language processing. My focus is on creating efficient, 
              user-friendly solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 