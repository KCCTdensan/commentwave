import { MouseEventHandler } from "react"

export default function Button({
  text,
  handler,
}: {
  text: string
  handler?: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className="px-4 py-2 border-4 border-black rounded-lg font-bold hover:underline"
      onClick={handler}>
      {text}
    </button>
  )
}
