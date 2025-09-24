import React from 'react'
import { Code, CheckCircle, Layers, Bot } from 'lucide-react'

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'export', label: 'Export', icon: Code },
    { id: 'qa', label: 'QA Check', icon: CheckCircle },
    { id: 'system', label: 'System', icon: Layers },
    { id: 'assistant', label: 'AI', icon: Bot },
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-surface border-t border-border backdrop-blur-lg">
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive 
                  ? 'text-primary bg-primary/10 neon-glow scale-110' 
                  : 'text-text-muted hover:text-primary hover:scale-105'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'neon-border' : ''}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation