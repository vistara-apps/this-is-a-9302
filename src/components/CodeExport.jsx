import React, { useState } from 'react'
import { Download, Copy, Figma, Code2, ChevronDown, CheckCircle } from 'lucide-react'

const CodeExport = () => {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [framework, setFramework] = useState('react')
  const [generatedCode, setGeneratedCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const mockComponents = [
    { id: 1, name: 'Primary Button', type: 'Button', figmaId: 'btn-1' },
    { id: 2, name: 'Input Field', type: 'Input', figmaId: 'input-1' },
    { id: 3, name: 'Card Component', type: 'Card', figmaId: 'card-1' },
    { id: 4, name: 'Navigation Bar', type: 'Navigation', figmaId: 'nav-1' },
  ]

  const frameworks = [
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'html', name: 'HTML/CSS' },
    { id: 'flutter', name: 'Flutter' },
  ]

  const generateCode = async () => {
    if (!selectedComponent) return
    
    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const mockCode = {
      react: `import React from 'react'

const ${selectedComponent.name.replace(/\s+/g, '')} = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors duration-200'
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
      {...props}
    >
      {children}
    </button>
  )
}

export default ${selectedComponent.name.replace(/\s+/g, '')}`,
      vue: `<template>
  <button 
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: '${selectedComponent.name.replace(/\s+/g, '')}',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClasses() {
      const base = 'px-4 py-2 rounded-md font-medium transition-colors duration-200'
      const variants = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }
      return \`\${base} \${variants[this.variant]}\`
    }
  }
}
</script>`,
      html: `<button class="btn btn-primary">
  Button Text
</button>

<style>
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}
</style>`,
      flutter: `class ${selectedComponent.name.replace(/\s+/g, '')} extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final ButtonVariant variant;
  
  const ${selectedComponent.name.replace(/\s+/g, '')}({
    Key? key,
    required this.text,
    this.onPressed,
    this.variant = ButtonVariant.primary,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: variant == ButtonVariant.primary 
          ? Colors.blue 
          : Colors.grey,
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(6),
        ),
      ),
      child: Text(text),
    );
  }
}`
    }
    
    setGeneratedCode(mockCode[framework])
    setIsGenerating(false)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6 py-4">
      <div>
        <h2 className="text-2xl font-bold text-text mb-2 neon-text">Smart Code Export</h2>
        <p className="text-text-secondary">Convert Figma components to clean, reusable code</p>
      </div>

      {/* Figma Integration Status */}
      <div className="card border border-retro-cyan/30 bg-gradient-to-r from-retro-cyan/5 to-retro-purple/5">
        <div className="flex items-center gap-3">
          <Figma className="w-6 h-6 text-retro-cyan" />
          <div>
            <h3 className="font-medium text-text">Figma Connected</h3>
            <p className="text-sm text-text-secondary">Design System v2.1</p>
          </div>
        </div>
      </div>

      {/* Component Selection */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Select Component
        </label>
        <div className="space-y-2">
          {mockComponents.map((component) => (
            <button
              key={component.id}
              onClick={() => setSelectedComponent(component)}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-200 hover:scale-[1.02] ${
                selectedComponent?.id === component.id
                  ? 'border-primary bg-gradient-to-r from-primary/10 to-secondary/5 shadow-lg'
                  : 'border-border hover:border-primary/50 bg-surface dark:bg-gray-700/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-text">{component.name}</h4>
                  <p className="text-sm text-text-secondary">{component.type}</p>
                </div>
                <Code2 className={`w-4 h-4 ${selectedComponent?.id === component.id ? 'text-primary' : 'text-text-secondary'}`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Framework Selection */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Target Framework
        </label>
        <div className="relative">
          <select
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            className="input-field appearance-none pr-8"
          >
            {frameworks.map((fw) => (
              <option key={fw.id} value={fw.id}>
                {fw.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateCode}
        disabled={!selectedComponent || isGenerating}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
          !selectedComponent || isGenerating
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'btn-primary hover:scale-105 retro-glow'
        }`}
      >
        {isGenerating ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Generating Code...
          </div>
        ) : (
          'Generate Code'
        )}
      </button>

      {/* Generated Code */}
      {generatedCode && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-text">Generated Code</h3>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-surface dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-border rounded-md transition-all duration-200 hover:scale-105"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-retro-cyan" />
                    <span className="text-retro-cyan">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-text-secondary" />
                    <span className="text-text">Copy</span>
                  </>
                )}
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-surface dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-border rounded-md transition-all duration-200 hover:scale-105">
                <Download className="w-4 h-4 text-text-secondary" />
                <span className="text-text">Download</span>
              </button>
            </div>
          </div>
          
          <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto border border-retro-cyan/20 shadow-lg">
            <pre className="text-sm">
              <code className="language-javascript">{generatedCode}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default CodeExport