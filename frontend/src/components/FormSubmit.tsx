import { ReactNode } from "react"

export default function FormSubmit({ value }: { value: string }) {
  return (
    <input
      className="w-full rounded-lg bg-stone-700 py-2 font-bold text-white hover:bg-stone-600 hover:underline active:bg-stone-500"
      type="submit"
      value={value}
    />
  )
}
