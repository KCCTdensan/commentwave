import "./global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="h-full">
      <head />
      <body className="h-full">{children}</body>
    </html>
  )
}
