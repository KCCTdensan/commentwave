import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <div className="flex flex-col max-w-3xl h-full m-auto">
        <main>{children}</main>
        <footer className="mt-auto py-4">
          <p className="text-center font-bold">&copy; 2023 KCCTdensan</p>
        </footer>
      </div>
    </div>
  )
}
