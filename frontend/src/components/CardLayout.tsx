import { ReactNode } from "react"

import CommonFooter from "~/components/CommonFooter"

export default function CardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-scroll bg-white from-sky-500 to-green-400 sm:bg-gradient-to-b">
      <div className="mx-auto w-full bg-white px-12 py-16 sm:mb-16 sm:mt-24 sm:max-w-xl sm:rounded-lg sm:px-24 sm:drop-shadow-xl">
        {children}
      </div>
      <div className="mt-auto">
        <CommonFooter />
      </div>
    </div>
  )
}
