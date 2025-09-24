import React, { useState } from 'react'
import { Palette, Type, Layout, Package, Eye, Download, Plus } from 'lucide-react'

const DesignSystem = () => {
  const [activeCategory, setActiveCategory] = useState('colors')
  const [selectedComponent, setSelectedComponent] = useState(null)

  const categories = [
    { id: 'colors', name: 'Colors', icon: Palette },
    { id: 'typography', name: 'Typography', icon: Type },
    { id: 'spacing', name: 'Spacing', icon: Layout },
    { id: 'components', name: 'Components', icon: Package },
  ]

  const designTokens = {
    colors: [
      { name: 'Primary', value: '#3B82F6', hex: '#3B82F6', usage: 'Primary actions, links' },
      { name: 'Accent', value: '#10B981', hex: '#10B981', usage: 'Success states, highlights' },
      { name: 'Surface', value: '#FFFFFF', hex: '#FFFFFF', usage: 'Card backgrounds' },
      { name: 'Background', value: '#F8FAFC', hex: '#F8FAFC', usage: 'Page backgrounds' },
      { name: 'Text Primary', value: '#1F2937', hex: '#1F2937', usage: 'Headings, body text' },
      { name: 'Text Secondary', value: '#6B7280', hex: '#6B7280', usage: 'Labels, captions' },
    ],
    typography: [
      { name: 'Display', size: '48px', weight: '700', lineHeight: '1.1', usage: 'Hero headings' },
      { name: 'Headline', size: '30px', weight: '600', lineHeight: '1.2', usage: 'Section headings' },
      { name: 'Title', size: '24px', weight: '600', lineHeight: '1.3', usage: 'Card titles' },
      { name: 'Body', size: '16px', weight: '400', lineHeight: '1.5', usage: 'Body text' },
      { name: 'Caption', size: '14px', weight: '400', lineHeight: '1.4', usage: 'Labels, captions' },
      { name: 'Small', size: '12px', weight: '400', lineHeight: '1.3', usage: 'Small text' },
    ],
    spacing: [
      { name: 'XS', value: '4px', usage: 'Small gaps' },
      { name: 'SM', value: '8px', usage: 'Component padding' },
      { name: 'MD', value: '16px', usage: 'Default spacing' },
      { name: 'LG', value: '24px', usage: 'Section spacing' },
      { name: 'XL', value: '32px', usage: 'Large spacing' },
      { name: '2XL', value: '48px', usage: 'Page margins' },
    ],
    components: [
      { 
        name: 'Button', 
        variants: ['Primary', 'Secondary', 'Outline', 'Ghost'],
        figmaId: 'btn-component',
        lastUpdated: '2024-01-15'
      },
      { 
        name: 'Input', 
        variants: ['Default', 'Error', 'Disabled', 'WithIcon'],
        figmaId: 'input-component',
        lastUpdated: '2024-01-14'
      },
      { 
        name: 'Card', 
        variants: ['Default', 'Elevated', 'Bordered'],
        figmaId: 'card-component',
        lastUpdated: '2024-01-13'
      },
      { 
        name: 'Modal', 
        variants: ['Small', 'Medium', 'Large', 'Fullscreen'],
        figmaId: 'modal-component',
        lastUpdated: '2024-01-12'
      },
    ],
  }

  const renderColors = () => (
    <div className="grid grid-cols-2 gap-3">
      {designTokens.colors.map((color) => (
        <div key={color.name} className="card hover:scale-105 transition-transform duration-200">
          <div 
            className="w-full h-12 rounded-md mb-3 border border-border shadow-inner"
            style={{ backgroundColor: color.value }}
          ></div>
          <h4 className="font-medium text-text text-sm">{color.name}</h4>
          <p className="text-xs text-text-secondary font-mono">{color.hex}</p>
          <p className="text-xs text-text-secondary mt-1">{color.usage}</p>
        </div>
      ))}
    </div>
  )

  const renderTypography = () => (
    <div className="space-y-4">
      {designTokens.typography.map((type) => (
        <div key={type.name} className="card hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-text">{type.name}</h4>
            <span className="text-xs text-text-secondary">{type.size}</span>
          </div>
          <div 
            className="mb-2 text-text"
            style={{ 
              fontSize: Math.min(parseInt(type.size), 24) + 'px',
              fontWeight: type.weight,
              lineHeight: type.lineHeight 
            }}
          >
            The quick brown fox jumps
          </div>
          <div className="text-xs text-gray-600 grid grid-cols-2 gap-2">
            <span>Weight: {type.weight}</span>
            <span>Line Height: {type.lineHeight}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{type.usage}</p>
        </div>
      ))}
    </div>
  )

  const renderSpacing = () => (
    <div className="space-y-3">
      {designTokens.spacing.map((space) => (
        <div key={space.name} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-800">{space.name}</h4>
            <span className="text-xs text-gray-500 font-mono">{space.value}</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="bg-blue-100 border-l-4 border-blue-500"
              style={{ height: '20px', width: space.value }}
            ></div>
            <span className="text-sm text-gray-600">{space.value}</span>
          </div>
          <p className="text-xs text-gray-500">{space.usage}</p>
        </div>
      ))}
    </div>
  )

  const renderComponents = () => (
    <div className="space-y-3">
      {designTokens.components.map((component) => (
        <div 
          key={component.name} 
          className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
          onClick={() => setSelectedComponent(component)}
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-800">{component.name}</h4>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <Eye className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Download className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {component.variants.map((variant) => (
              <span 
                key={variant}
                className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
              >
                {variant}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500">Updated: {component.lastUpdated}</p>
        </div>
      ))}
    </div>
  )

  const renderContent = () => {
    switch (activeCategory) {
      case 'colors':
        return renderColors()
      case 'typography':
        return renderTypography()
      case 'spacing':
        return renderSpacing()
      case 'components':
        return renderComponents()
      default:
        return renderColors()
    }
  }

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text mb-2 neon-text">Design System</h2>
          <p className="text-text-secondary">Centralized design tokens and components</p>
        </div>
        <button className="p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg transition-all duration-200 retro-glow">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg transition-colors duration-300">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-surface dark:bg-gray-700 text-primary shadow-sm border border-primary/20'
                  : 'text-text-secondary hover:text-text hover:bg-surface/50 dark:hover:bg-gray-700/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {renderContent()}
      </div>

      {/* Component Detail Modal */}
      {selectedComponent && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{selectedComponent.name} Component</h3>
                <button 
                  onClick={() => setSelectedComponent(null)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Variants</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedComponent.variants.map((variant) => (
                    <div key={variant} className="p-3 border border-gray-200 rounded-lg text-center">
                      <span className="text-sm text-gray-700">{variant}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 btn-primary">
                  Export Code
                </button>
                <button className="flex-1 btn-secondary">
                  View in Figma
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DesignSystem