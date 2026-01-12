// app/not-found.tsx
import Link from "next/link"
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  )
}