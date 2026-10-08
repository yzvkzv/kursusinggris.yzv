import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          English Learning Platform
        </span>
        <h1 className="text-3xl font-bold text-slate-800 mt-4 mb-2">
          Master English Your Way 🚀
        </h1>
        <p className="text-slate-600 mb-8">
          Pilih mode belajar mandiri secara umum atau ikuti modul kursus terstruktur.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link href="/public-quiz" className="p-5 border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition text-left group">
            <h3 className="font-bold text-slate-800 group-hover:text-indigo-600">🌍 Menu Umum</h3>
            <p className="text-sm text-slate-500 mt-1">Latihan kuis harian & flashcard gratis tanpa batas.</p>
          </Link>

          <Link href="/courses" className="p-5 border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition text-left group">
            <h3 className="font-bold text-slate-800 group-hover:text-indigo-600">📚 Kursus Pelatihan</h3>
            <p className="text-sm text-slate-500 mt-1">Modul belajar bahasa Inggris bertahap & terstruktur.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
