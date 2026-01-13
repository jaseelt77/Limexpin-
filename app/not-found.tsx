// app/not-found.tsx
import Link from "next/link"
import Image from 'next/image';
export default function NotFound() {
  return (
   <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="flex flex-col items-center text-center gap-10">
    
    {/* Illustration */}
    <div className="relative w-64 h-64 sm:w-80 sm:h-80">
      <Image
        src="/images/404-computer.svg"
        alt="404 Illustration"
        fill
        sizes="(max-width: 640px) 256px, 320px"
        className="object-contain"
        priority
      />
    </div>

    {/* Text Content */}
    <div>
      <p className="text-xl font-semibold text-lime-500 dark:text-lime-600">404</p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Page not found
      </h1>

      <p className="mt-6 text-base text-gray-500 sm:text-lg">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      {/* Actions */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-gree-600 bg-lime-400 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
        >
          Go back home
        </Link>

        <Link
          href="/contact"
          className="text-sm font-semibold text-gray-900 hover:underline"
        >
          Contact support →
        </Link>
      </div>
    </div>
  </div>
</main>

  )
}