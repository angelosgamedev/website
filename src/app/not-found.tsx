import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-900 px-4 text-center text-white">
      <h1 className="text-4xl font-medium">Page not found</h1>
      <p className="text-gray-300">The page you are looking for does not exist.</p>
      <Link href="/" className="text-yellow-400 hover:text-yellow-300">
        Back to home
      </Link>
    </div>
  )
}
