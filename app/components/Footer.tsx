export default function Footer() {
  return (
    <footer className="bg-blue-900 dark:bg-blue-950 text-white py-8 px-4 md:px-16 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-semibold">&copy; {new Date().getFullYear()} Heeve. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="https://instagram.com/heeve.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Instagram</a>
          <a href="mailto:info@heeve.id" className="hover:text-blue-300">Email</a>
        </div>
      </div>
    </footer>
  )
}