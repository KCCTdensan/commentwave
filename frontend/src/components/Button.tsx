import { ReactNode } from "react"

export default function Button({
  children,
  ...props
}: {
  children: ReactNode
}) {
  return (
    <button
      className="rounded-lg bg-stone-700 py-2 px-4 font-bold text-white hover:bg-stone-600 hover:underline active:bg-stone-500"
      {...props}>
      {children}
    </button>
  )
}
