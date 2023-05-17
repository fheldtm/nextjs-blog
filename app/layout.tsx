import Link from "next/link"
import "../styles/globals.css"
import Image from "next/image"

export const metadata = {
  title: 'Cjlee\'s Blog',
  description: 'Generated by Next.js',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-slate-800 p-6 mt-6 mb-6 rounded-md">
        <Image src="/logo.png" alt="logo" width={40} height={40} className="mx-auto" />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Cjlee&#39;s Blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to my tech blog.</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-12 py-6 text-center text-slate-400">
        <h3>Developed by Cjlee</h3>
      </div>
    </footer>
  )

  return (
    <html lang="ko">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
