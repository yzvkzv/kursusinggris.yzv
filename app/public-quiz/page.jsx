'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function PublicQuizPage() {
  const [quizzes, setQuizzes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchQuizzes() {
      const { data, error } = await supabase.from('quizzes').select('*')
      if (error) {
        console.error('Error fetching quizzes:', error)
      } else {
        setQuizzes(data || [])
      }
      setLoading(false)
    }

    fetchQuizzes()
  }, [])

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kuis Bahasa Inggris Publik</h1>
        {loading ? (
          <p>Memuat kuis...</p>
        ) : quizzes.length === 0 ? (
          <p>Belum ada kuis yang tersedia.</p>
        ) : (
          <div className="grid gap-4">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="p-4 bg-white rounded-lg shadow border">
                <h2 className="text-xl font-semibold">{quiz.title}</h2>
                <p className="text-gray-600 mt-2">{quiz.question}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
