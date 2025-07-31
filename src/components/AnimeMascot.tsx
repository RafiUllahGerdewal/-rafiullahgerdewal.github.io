import { useState, useEffect, useRef } from 'react'

interface MascotProps {
  className?: string
}

export const AnimeMascot = ({ className = '' }: MascotProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showSpeechBubble, setShowSpeechBubble] = useState(false)
  const [position, setPosition] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isWalking, setIsWalking] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [isUserControlled, setIsUserControlled] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isColliding, setIsColliding] = useState(false)
  const mascotRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Position mascot near "Gerdewal" text
  useEffect(() => {
    // Calculate position near the center where "Gerdewal" is
    const centerPosition = window.innerWidth / 2 - 30 // 30 is half mascot width
    setPosition(centerPosition)
    
    // Small gentle movement around the center
    const animate = () => {
      setPosition(prev => {
        const center = window.innerWidth / 2 - 30
        const movement = Math.sin(Date.now() * 0.001) * 20 // Gentle sway
        const newPos = center + movement
        
        // Keep within bounds
        if (newPos > window.innerWidth - 60) {
          return window.innerWidth - 60
        } else if (newPos < 0) {
          return 0
        }
        
        return newPos
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start gentle animation
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Handle hover interactions
  const handleMouseEnter = () => {
    if (!isDragging && !isUserControlled) {
      setIsHovered(true)
      setShowSpeechBubble(true)
      setIsWalking(false)
    }
  }

  const handleMouseLeave = () => {
    if (!isDragging && !isUserControlled) {
      setIsHovered(false)
      setShowSpeechBubble(false)
      setIsWalking(true)
    }
  }

  // Handle mouse drag interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsUserControlled(true)
    setIsWalking(false)
    setShowSpeechBubble(false)
    
    const rect = mascotRef.current?.getBoundingClientRect()
    if (rect) {
      setDragOffset(e.clientX - rect.left)
    }
    
    // Pause walking animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  // Check for collision with text content
  const checkCollision = (newPosition: number) => {
    const contentArea = {
      left: window.innerWidth * 0.15, // 15% from left
      right: window.innerWidth * 0.85, // 85% from left
      top: window.innerHeight * 0.3,  // 30% from top
      bottom: window.innerHeight * 0.7 // 70% from top
    }
    
    const mascotLeft = newPosition
    const mascotRight = newPosition + 60 // mascot width
    const mascotTop = window.innerHeight - 120 // mascot position from bottom
    const mascotBottom = window.innerHeight - 80
    
    // Check if mascot overlaps with content area
    const isOverlapping = !(
      mascotRight < contentArea.left ||
      mascotLeft > contentArea.right ||
      mascotBottom < contentArea.top ||
      mascotTop > contentArea.bottom
    )
    
    return isOverlapping
  }

  // Handle keyboard controls
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isUserControlled) {
      e.preventDefault()
      
      switch (e.key) {
        case 'ArrowLeft':
          setDirection(-1)
          const newLeftPos = Math.max(0, position - 3)
          if (!checkCollision(newLeftPos)) {
            setPosition(newLeftPos)
            setIsColliding(false)
          } else {
            setIsColliding(true)
            setTimeout(() => setIsColliding(false), 2000)
          }
          break
        case 'ArrowRight':
          setDirection(1)
          const newRightPos = Math.min(window.innerWidth - 60, position + 3)
          if (!checkCollision(newRightPos)) {
            setPosition(newRightPos)
            setIsColliding(false)
          } else {
            setIsColliding(true)
            setTimeout(() => setIsColliding(false), 2000)
          }
          break
        case ' ':
          // Spacebar to show portfolio info
          setShowSpeechBubble(prev => !prev)
          break
        case 'Escape':
          // Escape to return to auto mode
          setIsUserControlled(false)
          setIsWalking(true)
          setShowSpeechBubble(false)
          setIsColliding(false)
          break
      }
    }
  }



  // Global mouse event listeners for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newPosition = e.clientX - dragOffset
        const maxPosition = window.innerWidth - 60
        
        if (newPosition >= 0 && newPosition <= maxPosition) {
          // Check collision before moving
          if (!checkCollision(newPosition)) {
            setPosition(newPosition)
            setIsColliding(false)
          } else {
            setIsColliding(true)
            setTimeout(() => setIsColliding(false), 2000)
          }
        }
      }
    }

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        // Keep user controlled but resume walking
        setIsWalking(true)
        
        if (!showSpeechBubble) {
          animationRef.current = requestAnimationFrame(() => {
            setPosition(prev => {
              const newPos = prev + (direction * 0.5)
              if (newPos > window.innerWidth - 60) {
                setDirection(-1)
                return window.innerWidth - 60
              } else if (newPos < 0) {
                setDirection(1)
                return 0
              }
              return newPos
            })
          })
        }
      }
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, dragOffset, direction, showSpeechBubble])

  // Keyboard event listeners
  useEffect(() => {
    if (isUserControlled) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isUserControlled])

  // Pause animation when speech bubble is shown
  useEffect(() => {
    if (showSpeechBubble) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    } else if (isWalking && !isDragging && !isUserControlled) {
      animationRef.current = requestAnimationFrame(() => {
        setPosition(prev => {
          const newPos = prev + (direction * 0.5)
          if (newPos > window.innerWidth - 60) {
            setDirection(-1)
            return window.innerWidth - 60
          } else if (newPos < 0) {
            setDirection(1)
            return 0
          }
          return newPos
        })
      })
    }
  }, [showSpeechBubble, isWalking, direction, isDragging, isUserControlled])

  return (
    <div className={`fixed bottom-8 z-50 pointer-events-none ${className}`} style={{ width: '100vw', height: '100vh' }}>
      {/* Walking Path */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      

      
      {/* Mascot Character */}
      <div
        ref={mascotRef}
        className={`absolute bottom-2 pointer-events-auto transition-all duration-300 ${isDragging ? 'cursor-grabbing scale-110' : 'cursor-grab hover:scale-110'}`}
        style={{
          left: `${position}px`,
          transform: `scaleX(${direction === 1 ? 1 : -1})`,
          zIndex: 1000,
          display: 'block'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        {/* Shadow */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"></div>
        
        {/* Character Body */}
        <div className="relative">
          {/* Head */}
          <div className={`w-8 h-8 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full border-2 border-yellow-400 relative ${isWalking ? 'animate-mascot-walk' : ''}`} style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            {/* Eyes */}
            <div className="absolute top-2 left-1.5 w-1 h-1 bg-black rounded-full animate-mascot-blink"></div>
            <div className="absolute top-2 right-1.5 w-1 h-1 bg-black rounded-full animate-mascot-blink" style={{ animationDelay: '0.1s' }}></div>
            
            {/* Blush when hovered */}
            {isHovered && (
              <>
                <div className="absolute top-3 left-0.5 w-1 h-1 bg-pink-300 rounded-full opacity-70"></div>
                <div className="absolute top-3 right-0.5 w-1 h-1 bg-pink-300 rounded-full opacity-70"></div>
              </>
            )}
            
            {/* Smile */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-black rounded-full"></div>
          </div>
          
          {/* Body */}
          <div className="w-6 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mt-1 relative" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
            {/* Arms */}
            <div className={`absolute top-0 left-0 w-1 h-2 bg-blue-400 rounded-full origin-bottom ${isWalking ? 'animate-pulse' : ''}`} 
                 style={{ animationDelay: '0.2s' }}></div>
            <div className={`absolute top-0 right-0 w-1 h-2 bg-blue-400 rounded-full origin-bottom ${isWalking ? 'animate-pulse' : ''}`} 
                 style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          {/* Legs */}
          <div className="flex justify-center gap-1 mt-1">
            <div className={`w-1 h-2 bg-blue-400 rounded-full ${isWalking ? 'animate-pulse' : ''}`} 
                 style={{ animationDelay: '0.4s' }}></div>
            <div className={`w-1 h-2 bg-blue-400 rounded-full ${isWalking ? 'animate-pulse' : ''}`} 
                 style={{ animationDelay: '0.8s' }}></div>
          </div>
        </div>

        {/* Robotic RG Text */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-black text-green-400 px-2 py-1 rounded border border-green-400 text-xs font-mono tracking-wider animate-robotic-glow" style={{ 
            fontFamily: 'monospace',
            letterSpacing: '0.2em',
            fontWeight: 'bold'
          }}>
            <span className="animate-robotic-pulse">R</span><span className="animate-robotic-pulse" style={{ animationDelay: '0.1s' }}>G</span>
          </div>
        </div>
        
        {/* Speech Bubble */}
        {showSpeechBubble && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 animate-fade-in">
            <div className="bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg border border-gray-200 max-w-xs">
              <div className="relative">
                <p className="text-center leading-relaxed">
                  {isUserControlled ? 
                    "I'm your portfolio guide! 🎯\nClick me to control, use arrows to move, space for info, ESC for auto mode" : 
                    "Hi! I'm RG! 👋\nRG is active! You can mail or any other contact. Feel free to reach out!"
                  }
                </p>
                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        )}

        {/* Collision Warning */}
        {isColliding && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 animate-fade-in">
            <div className="bg-red-500 text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-red-400 whitespace-nowrap">
              <div className="relative">
                OOPS! Touched the object, I need space from writing! 📝
                {/* Arrow pointing down */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500"></div>
              </div>
            </div>
          </div>
        )}

        {/* Control Status Indicator */}
        {isUserControlled && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full opacity-80">
            Portfolio Guide Active | ESC to auto
          </div>
        )}
      </div>
    </div>
  )
} 