'use client'

import Link from 'next/link'

export default function Home() {
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
      {/* Header */}
      <div style={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '18px' }}>
          <span>🚀</span>
          <span>EnglishAcademy</span>
        </div>
        <span style={{ fontSize: '12px', background: 'rgba(99, 102, 241, 0.25)', color: '#818cf8', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.4)' }}>
          Next.js & Supabase
        </span>
      </div>

      {/* Hero Content */}
      <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ fontSize: '38px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.2' }}>
          Master English Your Way
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.5' }}>
          Pilih mode belajar mandiri secara umum atau ikuti modul kursus terstruktur untuk meningkatkan kemampuan bahasa Inggris kamu dengan cepat.
        </p>

        {/* Menu Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', textAlign: 'left' }}>
          
          {/* Card 1 */}
          <Link href="/public-quiz" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '24px',
            textDecoration: 'none',
            color: '#ffffff',
            display: 'block',
            transition: '0.2s'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>🌍</div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#818cf8' }}>Menu Umum</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.4', marginBottom: '16px' }}>
              Latihan kuis harian & flashcard gratis tanpa batas untuk menguji kemampuan dasarmu.
            </p>
            <span style={{ color: '#818cf8', fontSize: '14px', fontWeight: '650' }}>Mulai Kuis →</span>
          </Link>

          {/* Card 2 */}
          <Link href="/courses" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '24px',
            textDecoration: 'none',
            color: '#ffffff',
            display: 'block',
            transition: '0.2s'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>📚</div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#c084fc' }}>Kursus Pelatihan</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.4', marginBottom: '16px' }}>
              Modul belajar bahasa Inggris bertahap & terstruktur langsung dari database Supabase.
            </p>
            <span style={{ color: '#c084fc', fontSize: '14px', fontWeight: '650' }}>Lihat Kursus →</span>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', textAlign: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', color: '#64748b' }}>
        Created By YzV & Gemini © 2026
      </div>
    </main>
  )
}
