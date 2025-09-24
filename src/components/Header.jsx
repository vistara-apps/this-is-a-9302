import React, { useState } from 'react'
import { User, Settings, Search } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Header = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ name: 'Designer', email: 'designer@company.com' })
    setShowLogin(false)
  }

  return (
    <header className="bg-surface border-b border-border p-4 relative retro-grid">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-text neon-glow">
          DesignSync<span className="text-primary">AI</span>
        </h1>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Search className="w-5 h-5 text-text-muted hover:text-primary transition-colors cursor-pointer" />
          
          {user ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center neon-border">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          ) : (
            <button 
              onClick={() => setShowLogin(true)}
              className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center neon-border hover:scale-110 transition-transform"
            >
              <User className="w-4 h-4 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search designs..."
            className="input-field pl-10 neon-border"
          />
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-surface text-text p-6 rounded-lg m-4 w-full max-w-sm border border-border neon-border">
            <h2 className="text-xl font-semibold mb-4 text-primary neon-glow">Sign In</h2>
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