'use client'

import { useState } from 'react'
import Link from 'next/link'

const quizData = [
  {
    id: 1,
    title: 'Daily Vocabulary Challenge #1',
    question: 'What is the past tense form of the verb "go"?',
    options: ['Goed', 'Went', 'Gone', 'Going'],
    answer: 'Went'
  },
  {
    id: 2,
    title: 'Grammar Basic #2',
    question: 'Which pronoun is used for a single female person?',
    options: ['He', 'They', 'She', 'It'],
    answer: 'She'
  },
  {
    id: 3,
    title: 'Common Expression #3',
    question: 'What is the meaning of "Thank you very much"?',
    options: ['Terima kasih banyak', 'Sampai jumpa', 'Permisi', 'Selamat pagi'],
    answer: 'Terima kasih banyak'
  }
]

export default function PublicQuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (quizId, option) => {
    if (submitted) return
    setSelectedAnswers({ ...selectedAnswers, [quizId]: option })
  }

  const calculateScore = () => {
    let score = 0
    quizData.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        score += 1
      }
    })
    return score
  }

  const resetQuiz = () => {
    setSelectedAnswers({})
    setSubmitted(false)
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px'
    }}>
      <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
        
        {/* Nav Kembali */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ color: '#818cf8', textDecoration: 'none', fontSize: '14px', fontWeight: '650' }}>
            ← Kembali ke Beranda
          </Link>
          <span style={{ fontSize: '12px', background: 'rgba(99, 102, 241, 0.25)', color: '#818cf8', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.4)' }}>
            Kuis Interaktif
          </span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Kuis Bahasa Inggris Publik</h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '32px' }}>
          Uji kemampuan dasar dan perbanyak kosakata melalui latihan pilihan ganda di bawah ini.
        </p>

        {submitted && (
          <div style={{
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid #818cf8',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#818cf8', marginBottom: '4px' }}>Hasil Kuis Kamu</h2>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>Skor kamu: <strong>{calculateScore()}</strong> dari {quizData.length}</p>
            <button onClick={resetQuiz} style={{
              marginTop: '12px',
              background: '#818cf8',
              color: '#ffffff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Coba Lagi
            </button>
          </div>
        )}

        <div style={{ display: 'grid', gap: '20px' }}>
          {quizData.map((quiz, index) => (
            <div key={quiz.id} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '20px'
            }}>
              <span style={{ fontSize: '12px', color: '#818cf8', fontWeight: 'bold' }}>SOAL {index + 1}</span>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '8px 0 16px', color: '#ffffff' }}>{quiz.question}</h2>
              
              <div style={{ display: 'grid', gap: '10px' }}>
                {quiz.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[quiz.id] === option
                  const isCorrect = submitted && option === quiz.answer
                  const isWrong = submitted && isSelected && option !== quiz.answer

                  let bgStyle = 'rgba(255, 255, 255, 0.03)'
                  let borderStyle = '1px solid rgba(255, 255, 255, 0.1)'

                  if (isSelected) {
                    bgStyle = 'rgba(99, 102, 241, 0.2)'
                    borderStyle = '1px solid #818cf8'
                  }
                  if (isCorrect) {
                    bgStyle = 'rgba(34, 197, 94, 0.2)'
                    borderStyle = '1px solid #22c55e'
                  }
                  if (isWrong) {
                    bgStyle = 'rgba(239, 68, 68, 0.2)'
                    borderStyle = '1px solid #ef4444'
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(quiz.id, option)}
                      style={{
                        background: bgStyle,
                        border: borderStyle,
                        borderRadius: '10px',
                        padding: '12px 16px',
                        color: '#ffffff',
                        textAlign: 'left',
                        cursor: submitted ? 'default' : 'pointer',
                        fontSize: '14px',
                        transition: '0.2s'
                      }}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {!submitted && (
          <button
            onClick={() => setSubmitted(true)}
            style={{
              width: '100%',
              marginTop: '28px',
              background: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '14px',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
            }}
          >
            Kirim Jawaban & Lihat Skor
          </button>
        )}

      </div>

      {/* Footer */}
      <div style={{ maxWidth: '800px', width: '100%', margin: '40px auto 0', textAlign: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', color: '#64748b' }}>
        Created By YzV & Gemini © 2026
      </div>
    </main>
  )
}
