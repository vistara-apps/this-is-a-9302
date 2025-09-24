import React, { useState } from 'react'
import { User, Settings, Search } from 'lucide-react'

const Header = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ name: 'Designer', email: 'designer@company.com' })
    setShowLogin(false)
  }

  return (
    <header className="bg-gray-900 text-white p-4 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">DesignSyncAI</h1>
        
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5" />
          
          {user ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </div>
          ) : (
            <button 
              onClick={() => setShowLogin(true)}
              className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
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
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg m-4 w-full max-w-sm">
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