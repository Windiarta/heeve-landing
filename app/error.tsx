"use client"

import Link from 'next/link'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Something went wrong</h1>
        <p className="text-gray-800 dark:text-gray-200 mb-6">An unexpected error occurred. Please try again.</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => reset()} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            Try again
          </button>
          <Link href="/" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100">
            Go home
          </Link>
        </div>
      </div>
    </main>
  )
}


