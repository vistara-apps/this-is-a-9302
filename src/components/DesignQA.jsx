import React, { useState } from 'react'
import { CheckCircle, AlertTriangle, X, Play, RotateCcw } from 'lucide-react'

const DesignQA = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [qaResults, setQaResults] = useState(null)
  const [selectedVersion, setSelectedVersion] = useState('v2.1')

  const mockResults = {
    passed: 12,
    failed: 3,
    warnings: 2,
    details: [
      {
        id: 1,
        type: 'error',
        component: 'Primary Button',
        issue: 'Border radius mismatch',
        expected: '8px',
        actual: '6px',
        line: 'styles.css:15'
      },
      {
        id: 2,
        type: 'error',
        component: 'Input Field',
        issue: 'Padding inconsistency',
        expected: '12px 16px',
        actual: '10px 14px',
        line: 'Input.jsx:22'
      },
      {
        id: 3,
        type: 'warning',
        component: 'Card Component',
        issue: 'Shadow differs slightly',
        expected: '0 4px 6px rgba(0,0,0,0.1)',
        actual: '0 2px 4px rgba(0,0,0,0.1)',
        line: 'Card.jsx:8'
      },
      {
        id: 4,
        type: 'error',
        component: 'Navigation',
        issue: 'Font weight mismatch',
        expected: '500',
        actual: '400',
        line: 'Nav.jsx:31'
      },
      {
        id: 5,
        type: 'warning',
        component: 'Typography',
        issue: 'Line height variance',
        expected: '1.5',
        actual: '1.4',
        line: 'Typography.css:12'
      }
    ]
  }

  const versions = [
    { id: 'v2.1', name: 'v2.1 - Latest', date: '2024-01-15' },
    { id: 'v2.0', name: 'v2.0 - Stable', date: '2024-01-01' },
    { id: 'v1.9', name: 'v1.9 - Previous', date: '2023-12-15' },
  ]

  const runQACheck = async () => {
    setIsRunning(true)
    setQaResults(null)
    
    // Simulate QA check delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setQaResults(mockResults)
    setIsRunning(false)
  }

  const getIssueIcon = (type) => {
    switch (type) {
      case 'error':
        return <X className="w-4 h-4 text-red-500" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      default:
        return <CheckCircle className="w-4 h-4 text-green-500" />
    }
  }

  const getIssueColor = (type) => {
    switch (type) {
      case 'error':
        return 'border-red-200 bg-red-50'
      case 'warning':
        return 'border-yellow-200 bg-yellow-50'
      default:
        return 'border-green-200 bg-green-50'
    }
  }

  return (
    <div className="space-y-6 py-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Design QA Check</h2>
        <p className="text-gray-600">Compare implementation against Figma designs</p>
      </div>

      {/* Version Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Design Version
        </label>
        <select
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
          className="input-field"
        >
          {versions.map((version) => (
            <option key={version.id} value={version.id}>
              {version.name} ({version.date})
            </option>
          ))}
        </select>
      </div>

      {/* QA Controls */}
      <div className="flex gap-3">
        <button
          onClick={runQACheck}
          disabled={isRunning}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
            isRunning
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'btn-primary'
          }`}
        >
          {isRunning ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Running QA Check...
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Run QA Check
            </>
          )}
        </button>
        
        {qaResults && (
          <button
            onClick={() => setQaResults(null)}
            className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* QA Progress */}
      {isRunning && (
        <div className="card">
          <h3 className="font-medium text-gray-800 mb-3">Checking Components...</h3>
          <div className="space-y-2">
            {['Buttons', 'Inputs', 'Cards', 'Navigation', 'Typography'].map((component, index) => (
              <div key={component} className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600">{component}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* QA Results Summary */}
      {qaResults && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{qaResults.passed}</div>
              <div className="text-sm text-green-700">Passed</div>
            </div>
            <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{qaResults.failed}</div>
              <div className="text-sm text-red-700">Failed</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{qaResults.warnings}</div>
              <div className="text-sm text-yellow-700">Warnings</div>
            </div>
          </div>

          {/* Detailed Issues */}
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Issues Found</h3>
            <div className="space-y-3">
              {qaResults.details.map((issue) => (
                <div
                  key={issue.id}
                  className={`p-4 border rounded-lg ${getIssueColor(issue.type)}`}
                >
                  <div className="flex items-start gap-3">
                    {getIssueIcon(issue.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-800">{issue.component}</h4>
                        <span className="text-xs text-gray-500">{issue.line}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{issue.issue}</p>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-500">Expected:</span>
                          <div className="font-mono bg-white/50 p-1 rounded mt-1">{issue.expected}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Actual:</span>
                          <div className="font-mono bg-white/50 p-1 rounded mt-1">{issue.actual}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isRunning && !qaResults && (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">Ready for QA Check</h3>
          <p className="text-gray-600">Run a check to compare your implementation with the selected design version</p>
        </div>
      )}
    </div>
  )
}

export default DesignQA