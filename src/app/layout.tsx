import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '프론트엔드 개발자 포트폴리오',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
