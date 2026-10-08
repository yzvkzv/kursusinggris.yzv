import './globals.css';

export const metadata = {
  title: 'Kursus Bahasa Inggris',
  description: 'Platform Belajar Bahasa Inggris Mandiri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
