'use client'

import { useState } from 'react'
import Link from 'next/link'

const coursesData = [
  {
    id: 1,
    title: 'English Grammar Dasar & Tenses',
    category: 'Grammar',
    duration: '15 Menit',
    description: 'Pelajari fondasi tata bahasa Inggris dari nol mulai dari Simple Present Tense, Past Tense, hingga cara menyusun kalimat sehari-hari dengan benar.',
    content: {
      overview: 'Tenses adalah bentuk kata kerja dalam bahasa Inggris yang menunjukkan waktu terjadinya suatu perbuatan atau peristiwa (sekarang, lampau, atau masa depan).',
      points: [
        'Simple Present Tense: Digunakan untuk kebiasaan atau fakta umum. Rumus: Subject + V1 (s/es). Contoh: "I study English everyday."',
        'Simple Past Tense: Digunakan untuk kegiatan yang terjadi di masa lampau. Rumus: Subject + V2. Contoh: "She went to Bali yesterday."',
        'Simple Future Tense: Digunakan untuk rencana di masa depan. Rumus: Subject + will + V1. Contoh: "We will learn tomorrow."'
      ],
      miniTip: 'Tips Cepat: Selalu perhatikan kata keterangan waktu (everyday, yesterday, tomorrow) untuk menentukan tenses apa yang harus digunakan!'
    }
  },
  {
    id: 2,
    title: 'Daily Conversation & Speaking',
    category: 'Speaking',
    duration: '20 Menit',
    description: 'Kumpulan frasa, sapaan, dan pola percakapan umum yang sering digunakan oleh penutur asli dalam situasi sosial maupun profesional.',
    content: {
      overview: 'Percakapan sehari-hari berfokus pada keluwesan dan ekspresi yang natural, bukan sekadar menghafal tata bahasa yang kaku.',
      points: [
        'Greeting (Sapaan): "How is it going?" atau "What is up?" sebagai alternatif dari "How are you?"',
        'Expressing Gratitude: "I really appreciate it" atau "Thanks a million" untuk ucapan terima kasih yang lebih ekspresif.',
        'Asking for Opinion: "What do you think about...?" atau "How do you feel about this?"'
      ],
      miniTip: 'Tips Cepat: Jangan takut salah pengucapan (pronunciation). Kunci utama speaking adalah percaya diri dan lawan bicara paham maksudmu.'
    }
  },
  {
    id: 3,
    title: 'Essential Vocabulary Builder',
    category: 'Vocabulary',
    duration: '10 Menit',
    description: 'Perkaya kosakata bahasa Inggris dengan menghafalkan kata benda, kata kerja, dan kata sifat paling populer beserta contoh penggunaannya.',
    content: {
      overview: 'Kosakata adalah bahan bakar utama dalam berbahasa Inggris. Semakin kaya kosakatamu, semakin mudah kamu merangkai kalimat.',
      points: [
        'Action Verbs (Kata Kerja): Achieve (mencapai), Improve (meningkatkan), Develop (mengembangkan), Succeed (sukses).',
        'Adjectives (Kata Sifat): Amazing (luar biasa), Brilliant (cemerlang), Confident (percaya diri), Essential (penting).',
        'Nouns (Kata Benda): Environment (lingkungan), Knowledge (pengetahuan), Challenge (tantangan), Opportunity (peluang).'
      ],
      miniTip: 'Tips Cepat: Hafalkan 5 kata baru setiap hari dan langsung buat contoh kalimatnya di catatan kecilmu.'
    }
  }
]

export default function CoursesPage() {
  const [activeCourseId, setActiveCourseId] = useState(null)

  const toggleCourse = (id) => {
    setActiveCourseId(activeCourseId === id ? null : id)
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
          <span style={{ fontSize: '12px', background: 'rgba(192, 132, 252, 0.25)', color: '#c084fc', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(192, 132, 252, 0.4)' }}>
            Modul Kursus & Materi
          </span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Daftar Kursus Pelatihan</h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '32px' }}>
          Pilih modul belajar bahasa Inggris bertahap. Klik tombol "Mulai Belajar" untuk membuka materi lengkapnya di sini.
        </p>

        <div style={{ display: 'grid', gap: '20px' }}>
          {coursesData.map((course) => {
            const isOpen = activeCourseId === course.id

            return (
              <div key={course.id} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: isOpen ? '1px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.1)',
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
                  onClick={() => toggleCourse(course.id)}
                  style={{
                    background: isOpen ? '#c084fc' : 'transparent',
                    border: '1px solid #c084fc',
                    color: isOpen ? '#0f172a' : '#c084fc',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: '0.2s'
                  }}
                >
                  {isOpen ? 'Tutup Materi ▲' : 'Mulai Belajar →'}
                </button>

                {/* Bagian Isi Materi yang Terbuka */}
                {isOpen && (
                  <div style={{
                    marginTop: '20px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#c084fc', marginBottom: '8px' }}>📖 Ringkasan Materi</h3>
                    <p style={{ color: '#e2e8f0', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                      {course.content.overview}
                    </p>

                    <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>Poin Pembahasan Utama:</h4>
                    <ul style={{ paddingLeft: '20px', color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', display: 'grid', gap: '8px', marginBottom: '16px' }}>
                      {course.content.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    <div style={{
                      background: 'rgba(192, 132, 252, 0.1)',
                      border: '1px solid rgba(192, 132, 252, 0.3)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      color: '#e2e8f0',
                      fontSize: '13px'
                    }}>
                      💡 <strong>Catatan Belajar:</strong> {course.content.miniTip}
                    </div>
                  </div>
                )}

              </div>
            )
          })}
        </div>

      </div>

      {/* Footer */}
      <div style={{ maxWidth: '800px', width: '100%', margin: '40px auto 0', textAlign: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', color: '#64748b' }}>
        Created By YzV & Gemini © 2026
      </div>
    </main>
  )
}
