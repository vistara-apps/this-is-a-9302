import React, { useState } from 'react'
import { Send, Bot, User, Lightbulb, Code, Palette, HelpCircle } from 'lucide-react'

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your DesignSyncAI assistant. I can help you with design systems, code generation, and best practices. What would you like to know?",
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickActions = [
    { 
      id: 'spacing', 
      icon: Palette, 
      text: 'Explain spacing tokens',
      message: 'Can you explain how to use spacing tokens effectively in our design system?'
    },
    { 
      id: 'components', 
      icon: Code, 
      text: 'Generate button variants',
      message: 'Help me create different button variants following best practices'
    },
    { 
      id: 'colors', 
      icon: Lightbulb, 
      text: 'Color accessibility',
      message: 'How can I ensure my color choices meet accessibility standards?'
    },
    { 
      id: 'help', 
      icon: HelpCircle, 
      text: 'Getting started',
      message: 'How do I get started with setting up a design system in DesignSyncAI?'
    },
  ]

  const handleSend = async (messageText = input) => {
    if (!messageText.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const aiResponse = generateAIResponse(messageText)
    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: aiResponse,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const generateAIResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('spacing') || lowerInput.includes('token')) {
      return `Great question about spacing tokens! Here's how to use them effectively:

**Spacing Scale:**
- XS (4px): Small gaps between related elements
- SM (8px): Component internal padding
- MD (16px): Standard spacing between sections
- LG (24px): Major section separation
- XL (32px): Page-level margins

**Best Practices:**
1. Use consistent multiples of 4px
2. Create semantic names (tight, normal, loose)
3. Apply spacing systematically across components

Would you like me to show you how to implement these in your code?`
    }
    
    if (lowerInput.includes('button') || lowerInput.includes('variant')) {
      return `I'll help you create effective button variants! Here's a systematic approach:

**Primary Button Variants:**
- \`primary\`: Main actions (CTA, submit)
- \`secondary\`: Secondary actions
- \`outline\`: Subtle actions
- \`ghost\`: Minimal actions

**Size Variants:**
- \`small\`: 32px height, 12px padding
- \`medium\`: 40px height, 16px padding  
- \`large\`: 48px height, 20px padding

**State Variants:**
- Default, hover, active, disabled, loading

Would you like me to generate the React code for these variants?`
    }
    
    if (lowerInput.includes('color') || lowerInput.includes('accessibility')) {
      return `Color accessibility is crucial! Here are the key guidelines:

**WCAG Standards:**
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px+): 3:1 contrast ratio minimum
- UI components: 3:1 contrast ratio

**Best Practices:**
1. Test with tools like WebAIM's contrast checker
2. Provide alternative indicators beyond color
3. Consider color blindness (8% of men affected)
4. Use semantic color naming (success, warning, error)

**Your Current Palette:**
✅ Primary (#3B82F6) - Good contrast on white
✅ Accent (#10B981) - Accessible for most uses
⚠️ Always test in context!

Need help checking specific color combinations?`
    }
    
    if (lowerInput.includes('getting started') || lowerInput.includes('setup')) {
      return `Welcome to DesignSyncAI! Here's your getting started guide:

**Step 1: Connect Figma**
- Link your Figma account via OAuth
- Select your design system file
- Import components and tokens

**Step 2: Set up Code Export**
- Choose your framework (React, Vue, etc.)
- Configure naming conventions
- Test with a simple component

**Step 3: Establish QA Process**
- Set up design version tracking
- Run your first design-to-code check
- Review and fix any discrepancies

**Step 4: Build Your Design System Hub**
- Organize tokens by category
- Document component usage
- Set up version control

Ready to start with any of these steps?`
    }
    
    return `I understand you're asking about "${input}". Here are some ways I can help:

• **Design System Questions**: Token usage, component organization, best practices
• **Code Generation**: React/Vue components, CSS utilities, framework-specific code
• **QA & Testing**: Design consistency checks, accessibility validation
• **Integration Help**: Figma setup, workflow optimization

Could you be more specific about what you'd like to know? I'm here to help make your design-to-development process smoother!`
  }

  const handleQuickAction = (action) => {
    handleSend(action.message)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] py-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Assistant</h2>
        <p className="text-gray-600 mb-4">Get help with design systems and code generation</p>
      </div>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  className="p-3 text-left border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary mb-1" />
                  <span className="text-sm text-gray-700">{action.text}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'bot' && (
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.content}</p>
              <span className={`text-xs mt-1 block ${
                message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.timestamp}
              </span>
            </div>

            {message.type === 'user' && (
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about design systems, components, or code..."
          className="flex-1 input-field"
          disabled={isTyping}
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          className={`p-2 rounded-lg transition-colors ${
            !input.trim() || isTyping
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default AIAssistant