export const metadata = {
  title: 'Next.js Server Examples',
  description: 'Server Components and SSR examples',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
