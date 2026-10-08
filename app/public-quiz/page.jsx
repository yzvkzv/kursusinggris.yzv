'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function PublicQuizPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuizzes() {
      const { data, error } = await supabase.from('public_quizzes').select('*');
      if (!error) setQuizzes(data);
      setLoading(false);
    }
    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="text-indigo-600 text-sm font-medium hover:underline">← Kembali ke Beranda</Link>
        <h1 className="text-2xl font-bold text-slate-800 mt-4 mb-2">🌍 Kuis Harian (Menu Umum)</h1>
        <p className="text-slate-600 mb-6">Uji kemampuan bahasa Inggris kasualmu di sini.</p>

        {loading ? (
          <p className="text-slate-500">Memuat soal dari Supabase...</p>
        ) : quizzes.length === 0 ? (
          <p className="text-slate-500">Belum ada soal di database Supabase.</p>
        ) : (
          quizzes.map((q, index) => (
            <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-4">
              <p className="font-semibold text-slate-800 mb-3">{index + 1}. {q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <button key={i} className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-indigo-50 hover:border-indigo-300 transition text-sm">
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
