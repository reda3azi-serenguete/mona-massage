import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <header className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-white">5-ELEMNTS</h1>
        <p className="text-slate-400 mt-2">Modern React App - Ready to Build</p>
      </header>

      <main className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Welcome! 🚀</h2>
            
            <p className="text-slate-300 mb-6">
              Your project is fully set up with:
            </p>

            <ul className="space-y-3 mb-8 text-slate-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>React 18 with TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Vite for fast development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Tailwind CSS for styling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>ESLint for code quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Frontend Code Reviewer Agent ready</span>
              </li>
            </ul>

            <div className="bg-slate-700 rounded p-4 mb-6">
              <p className="text-slate-200 font-mono text-sm">
                Edit <code className="text-cyan-400">src/App.tsx</code> to get started building!
              </p>
            </div>

            <p className="text-slate-400 text-sm">
              Start creating components in <code className="text-cyan-400">src/components/</code> and pages in <code className="text-cyan-400">src/pages/</code>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
