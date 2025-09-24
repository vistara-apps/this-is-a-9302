import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const RetroThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative group"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Retro container with neon border effect */}
      <div className="relative w-14 h-7 bg-gradient-to-r from-retro-pink via-retro-purple to-retro-cyan rounded-full p-0.5 transition-all duration-300 hover:shadow-lg">
        
        {/* Inner track */}
        <div className="w-full h-full bg-surface dark:bg-gray-800 rounded-full relative overflow-hidden">
          
          {/* Sliding toggle circle */}
          <div 
            className={`absolute top-0.5 w-6 h-6 bg-gradient-to-br rounded-full shadow-md transition-all duration-300 ease-out transform ${
              isDarkMode 
                ? 'translate-x-7 from-retro-purple to-retro-cyan shadow-retro-cyan/30' 
                : 'translate-x-0.5 from-retro-yellow to-retro-pink shadow-retro-pink/30'
            }`}
          >
            {/* Icon inside the toggle */}
            <div className="w-full h-full flex items-center justify-center">
              {isDarkMode ? (
                <Moon className="w-3 h-3 text-white drop-shadow-sm" />
              ) : (
                <Sun className="w-3 h-3 text-white drop-shadow-sm" />
              )}
            </div>
          </div>

          {/* Background pattern for retro effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          </div>
        </div>

        {/* Outer glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-retro-pink via-retro-purple to-retro-cyan rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10"></div>
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-surface dark:bg-gray-800 text-text text-xs px-2 py-1 rounded border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
        {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </div>
    </button>
  )
}

export default RetroThemeToggle