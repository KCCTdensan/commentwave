import { ReactNode } from "react"

import CommonFooter from "~/components/CommonFooter"
import CommonHeader from "~/components/CommonHeader"

export default function CenterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <CommonHeader />
      <div className="mx-auto w-full max-w-4xl px-3">{children}</div>
      <div className="mt-auto">
        <CommonFooter />
      </div>
    </div>
  )
}
