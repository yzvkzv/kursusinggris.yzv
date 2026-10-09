'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white flex flex-col justify-between p-6 sm:p-12">
      {/* Header / Brand */}
      <div className="max-w-4xl mx-auto w-full flex justify-between items-center py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-lg tracking-wide">EnglishAcademy</span>
        </div>
        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
          Next.js & Supabase
        </span>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto w-full my-auto py-12 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
          Master English Your Way
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Pilih mode belajar mandiri secara umum atau ikuti modul kursus terstruktur untuk meningkatkan kemampuan bahasa Inggris kamu dengan cepat.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          {/* Card 1: Public Quiz */}
          <Link 
            href="/public-quiz"
            className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 p-6 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🌍
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
                Menu Umum
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Latihan kuis harian & flashcard gratis tanpa batas untuk menguji kemampuan dasarmu.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-indigo-400 text-sm font-semibold">
              <span>Mulai Kuis</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card 2: Courses */}
          <Link 
            href="/courses"
            className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 p-6 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                📚
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                Kursus Pelatihan
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Modul belajar bahasa Inggris bertahap & terstruktur langsung dari database Supabase.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-purple-400 text-sm font-semibold">
              <span>Lihat Kursus</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto w-full text-center py-4 border-t border-white/10 text-xs text-gray-500">
        © 2026 English Learning Platform. Built with passion.
      </div>
    </main>
  )
}
