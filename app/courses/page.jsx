'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

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
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Daftar Kursus Bahasa Inggris</h1>
        {loading ? (
          <p>Memuat data kursus...</p>
        ) : courses.length === 0 ? (
          <p>Belum ada kursus yang tersedia.</p>
        ) : (
          <div className="grid gap-4">
            {courses.map((course) => (
              <div key={course.id} className="p-4 bg-white rounded-lg shadow border">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
