import { ReactNode } from "react"

export default function RoomLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <main className="h-full">{children}</main>
    </div>
  )
}
