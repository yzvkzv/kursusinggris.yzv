'use client'

import Link from 'next/link'

const coursesData = [
  {
    id: 1,
    title: 'English Grammar Dasar & Tenses',
    category: 'Grammar',
    duration: '15 Menit',
    description: 'Pelajari fondasi tata bahasa Inggris dari nol mulai dari Simple Present Tense, Past Tense, hingga cara menyusun kalimat sehari-hari dengan benar.'
  },
  {
    id: 2,
    title: 'Daily Conversation & Speaking',
    category: 'Speaking',
    duration: '20 Menit',
    description: 'Kumpulan frasa, sapaan, dan pola percakapan umum yang sering digunakan oleh penutur asli dalam situasi sosial maupun profesional.'
  },
  {
    id: 3,
    title: 'Essential Vocabulary Builder',
    category: 'Vocabulary',
    duration: '10 Menit',
    description: 'Perkaya kosakata bahasa Inggris dengan menghafalkan kata benda, kata kerja, dan kata sifat paling populer beserta contoh penggunaannya.'
  }
]

export default function CoursesPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '24px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Nav Kembali */}
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
          Pilih modul belajar bahasa Inggris bertahap dan terstruktur untuk meningkatkan kemampuanmu secara mandiri.
        </p>

        <div style={{ display: 'grid', gap: '20px' }}>
          {coursesData.map((course) => (
            <div key={course.id} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '24px',
              transition: '0.2s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', background: 'rgba(192, 132, 252, 0.2)', color: '#c084fc', padding: '3px 10px', borderRadius: '6px', fontWeight: 'bold' }}>
                  {course.category}
                </span>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>⏱️ {course.duration}</span>
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#ffffff' }}>{course.title}</h2>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{course.description}</p>
              
              <button 
                onClick={() => alert(`Membuka modul: ${course.title}`)}
                style={{
                  background: 'transparent',
                  border: '1px solid #c084fc',
                  color: '#c084fc',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Mulai Belajar →
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
