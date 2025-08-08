import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Page not found</h1>
        <p className="text-gray-700 dark:text-gray-200 mb-6">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="text-blue-700 dark:text-blue-300 underline">Go back home</Link>
      </div>
    </main>
  )
}


