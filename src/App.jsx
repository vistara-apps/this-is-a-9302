import React, { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import CodeExport from './components/CodeExport'
import DesignQA from './components/DesignQA'
import DesignSystem from './components/DesignSystem'
import AIAssistant from './components/AIAssistant'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const [activeTab, setActiveTab] = useState('export')
  const [user, setUser] = useState(null)

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'export':
        return <CodeExport />
      case 'qa':
        return <DesignQA />
      case 'system':
        return <DesignSystem />
      case 'assistant':
        return <AIAssistant />
      default:
        return <CodeExport />
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg transition-colors duration-300">
        <div className="max-w-md mx-auto bg-surface shadow-lg min-h-screen transition-colors duration-300">
          <Header user={user} setUser={setUser} />
          
          <main className="px-4 pb-20">
            <div className="animate-fade-in">
              {renderActiveTab()}
            </div>
          </main>
          
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App