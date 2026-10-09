'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import Link from 'next/link'

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase.from('courses').select('*')
      if (error) {
        console.error('Error fetching courses:', error)
      } else {
        setCourses(data || [])
      }
      setLoading(false)
    }

    fetchCourses()
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
          <span style={{ fontSize: '12px', background: 'rgba(192, 132, 252, 0.25)', color: '#c084fc', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(192, 132, 252, 0.4)' }}>
            Modul Kursus
          </span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Daftar Kursus Pelatihan</h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '32px' }}>
          Pilih modul belajar bahasa Inggris bertahap dan terstruktur untuk meningkatkan kemampuanmu.
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Memuat data kursus...</div>
        ) : courses.length === 0 ? (
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '16px', 
            padding: '32px', 
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>Belum ada kursus yang tersedia di database.</p>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Data akan otomatis muncul setelah kamu menambahkannya di Supabase.</span>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {courses.map((course) => (
              <div key={course.id} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                transition: '0.2s'
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#c084fc' }}>{course.title}</h2>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
