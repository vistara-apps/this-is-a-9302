import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center w-12 h-6 rounded-full
        transition-all duration-500 ease-in-out animate-float
        ${isDarkMode 
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 animate-retro-glow' 
          : 'bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-blue-200'
        }
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${isDarkMode ? 'focus:ring-purple-500' : 'focus:ring-blue-400'}
      `}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle slider */}
      <div
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full
          transform transition-all duration-500 ease-in-out
          flex items-center justify-center
          ${isDarkMode 
            ? 'translate-x-6 bg-gray-900 text-neon-pink animate-neon-pulse' 
            : 'translate-x-0 bg-white text-yellow-500'
          }
          shadow-lg
        `}
      >
        {isDarkMode ? (
          <Moon className="w-3 h-3" />
        ) : (
          <Sun className="w-3 h-3" />
        )}
      </div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun 
          className={`w-3 h-3 transition-opacity duration-300 ${
            isDarkMode ? 'opacity-30' : 'opacity-70'
          } ${isDarkMode ? 'text-yellow-300' : 'text-white'}`} 
        />
        <Moon 
          className={`w-3 h-3 transition-opacity duration-300 ${
            isDarkMode ? 'opacity-70' : 'opacity-30'
          } ${isDarkMode ? 'text-white' : 'text-gray-600'}`} 
        />
      </div>
      
      {/* Retro glow effect for dark mode */}
      {isDarkMode && (
        <div className="absolute inset-0 rounded-full animate-pulse">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-sm"></div>
        </div>
      )}
    </button>
  )
}

export default ThemeToggle