import { Outlet } from "@remix-run/react"
import { LogoLarge } from "~/components/logo"

export default function Index() {
  return (
    <main className="flex flex-col h-full container max-w-3xl mx-auto">
      <header className="mt-16 mb-8 text-center">
        <LogoLarge />
        <p className="text-2xl font-bold">授業支援システム(仮)</p>
      </header>
      <Outlet />
      <footer className="mt-auto">
        <div className="py-4 text-center">
          <p>
            <span>src : </span>
            <a
              className="underline hover:font-bold"
              href="https://github.com/KCCTdensan/com">
              github.com
            </a>
          </p>
          <p className="font-bold">&copy; 2022 KCCTdensan</p>
        </div>
      </footer>
    </main>
  )
}
