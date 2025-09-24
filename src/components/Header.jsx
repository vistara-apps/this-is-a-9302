import React, { useState } from 'react'
import { User, Settings, Search } from 'lucide-react'
import RetroThemeToggle from './RetroThemeToggle'

const Header = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ name: 'Designer', email: 'designer@company.com' })
    setShowLogin(false)
  }

  return (
    <header className="bg-gray-900 dark:bg-gray-950 text-white p-4 relative transition-colors duration-300">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold bg-gradient-to-r from-retro-pink via-retro-purple to-retro-cyan bg-clip-text text-transparent animate-neon-pulse">
          DesignSyncAI
        </h1>
        
        <div className="flex items-center gap-3">
          <RetroThemeToggle />
          <Search className="w-5 h-5 hover:text-retro-cyan transition-colors duration-200" />
          
          {user ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-retro-pink to-retro-purple rounded-full flex items-center justify-center shadow-lg hover:shadow-retro-pink/30 transition-all duration-200">
                <User className="w-4 h-4" />
              </div>
            </div>
          ) : (
            <button 
              onClick={() => setShowLogin(true)}
              className="w-8 h-8 bg-gradient-to-br from-retro-pink to-retro-purple rounded-full flex items-center justify-center shadow-lg hover:shadow-retro-pink/30 transition-all duration-200 hover:scale-105"
            >
              <User className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search designs..."
            className="w-full bg-gray-800 dark:bg-gray-900 text-white pl-10 pr-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-retro-cyan/50 transition-all duration-200 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-surface dark:bg-gray-800 text-text p-6 rounded-lg m-4 w-full max-w-sm border border-border shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Sign In</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="input-field mb-3"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field mb-4"
                required
              />
              <div className="flex gap-2">
                <button type="submit" className="btn-primary flex-1">
                  Sign In
                </button>
                <button 
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header