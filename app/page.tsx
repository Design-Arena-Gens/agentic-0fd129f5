'use client'

import { useState } from 'react'
import { Sparkles, Video, TrendingUp, Wand2 } from 'lucide-react'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('')
  const [language, setLanguage] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!topic || !platform || !language) {
      alert('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, platform, language }),
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate content')
    } finally {
      setLoading(false)
    }
  }

  const handleTrendingTopics = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/trending')
      const data = await response.json()
      setResult({ trendingTopics: data.topics })
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to fetch trending topics')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Viral Content Agent
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your AI-powered creative partner for viral video content creation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Trending Topics</h3>
            <p className="text-gray-600 text-sm">Discover viral topics daily</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <Video className="w-8 h-8 text-pink-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Script Writing</h3>
            <p className="text-gray-600 text-sm">Engaging scripts in Gujarati/Hindi</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <Sparkles className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Visual Suggestions</h3>
            <p className="text-gray-600 text-sm">Scene-by-scene guidance</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <Wand2 className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">AI Tools</h3>
            <p className="text-gray-600 text-sm">Best tools recommendations</p>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Your Viral Video</h2>

          <div className="space-y-6">
            {/* Topic Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Video Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select a topic...</option>
                <option value="devotional">Devotional</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="motivation">Motivation</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="finance">Finance</option>
                <option value="health">Health & Wellness</option>
                <option value="education">Education</option>
              </select>
            </div>

            {/* Platform Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select a platform...</option>
                <option value="youtube-shorts">YouTube Shorts</option>
                <option value="instagram-reels">Instagram Reels</option>
                <option value="long-form">Long-form Videos</option>
                <option value="tiktok">TikTok</option>
              </select>
            </div>

            {/* Language Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select a language...</option>
                <option value="gujarati">Gujarati</option>
                <option value="hindi">Hindi</option>
                <option value="mix">Gujarati + Hindi Mix</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {loading ? 'Generating...' : 'Generate Viral Script'}
              </button>
              <button
                onClick={handleTrendingTopics}
                disabled={loading}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {result.trendingTopics ? (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                  Trending Topics Today
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {result.trendingTopics.map((item: any, idx: number) => (
                    <div key={idx} className="border-2 border-purple-100 rounded-lg p-4 hover:border-purple-300 transition-colors">
                      <h3 className="font-bold text-lg text-purple-700 mb-2">{item.topic}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="bg-purple-100 px-2 py-1 rounded">{item.category}</span>
                        <span className="bg-pink-100 px-2 py-1 rounded">🔥 {item.viralScore}/10</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Script Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Viral Script</h2>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-800">{result.title}</h3>
                    <div className="space-y-4">
                      {result.script?.map((scene: any, idx: number) => (
                        <div key={idx} className="bg-white rounded-lg p-4 shadow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Scene {scene.scene}
                            </span>
                            <span className="text-gray-500 text-sm">{scene.duration}</span>
                          </div>
                          <p className="text-gray-800 mb-3 leading-relaxed">{scene.text}</p>
                          <div className="border-t pt-3 mt-3">
                            <p className="text-sm text-gray-600 mb-2">
                              <strong>Visual:</strong> {scene.visual}
                            </p>
                            <p className="text-sm text-gray-600">
                              <strong>Audio:</strong> {scene.audio}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Tools Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Recommended AI Tools</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {result.tools?.map((tool: any, idx: number) => (
                      <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border-2 border-indigo-100">
                        <h3 className="font-bold text-lg text-indigo-800 mb-2">{tool.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{tool.purpose}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-indigo-100 px-2 py-1 rounded">{tool.type}</span>
                          <span className="text-xs text-purple-600 font-semibold">{tool.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips Section */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
                  <h2 className="text-2xl font-bold mb-3 text-orange-800">Pro Tips</h2>
                  <ul className="space-y-2">
                    {result.tips?.map((tip: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">✨</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
