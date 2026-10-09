'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import Link from 'next/link'

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
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '24px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header / Nav Kembali */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ color: '#818cf8', textDecoration: 'none', fontSize: '14px', fontWeight: '650' }}>
            ← Kembali ke Beranda
          </Link>
          <span style={{ fontSize: '12px', background: 'rgba(99, 102, 241, 0.25)', color: '#818cf8', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.4)' }}>
            Menu Kuis Umum
          </span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Kuis Bahasa Inggris Publik</h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '32px' }}>
          Uji kemampuan dasar dan perbanyak kosakata melalui latihan kuis harian tanpa batas.
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Memuat kuis...</div>
        ) : quizzes.length === 0 ? (
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '16px', 
            padding: '32px', 
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>Belum ada kuis yang tersedia di database.</p>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Data kuis akan muncul setelah ditambahkan ke tabel Supabase.</span>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {quizzes.map((quiz) => (
              <div key={quiz.id} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                transition: '0.2s'
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#818cf8' }}>{quiz.title}</h2>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>{quiz.question}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
