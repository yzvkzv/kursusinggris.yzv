'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase.from('courses').select('*');
      if (!error) setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="text-indigo-600 text-sm font-medium hover:underline">← Kembali ke Beranda</Link>
        <h1 className="text-2xl font-bold text-slate-800 mt-4 mb-2">📚 Modul Kursus Pelatihan</h1>
        <p className="text-slate-600 mb-6">Materi terstruktur untuk meningkatkan kemampuan bahasa Inggrismu secara profesional.</p>

        {loading ? (
          <p className="text-slate-500">Memuat kursus...</p>
        ) : courses.length === 0 ? (
          <p className="text-slate-500">Belum ada data kursus di Supabase.</p>
        ) : (
          courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-4 flex justify-between items-center">
              <div>
                <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full">{course.level}</span>
                <h3 className="font-bold text-slate-800 text-lg mt-2">{course.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{course.description}</p>
              </div>
              <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Mulai
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
