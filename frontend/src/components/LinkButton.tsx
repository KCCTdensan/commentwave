import Link from "next/link"
import { ReactNode } from "react"

import Button from "~/components/Button"

export default function LinkButton({
  href,
  children,
  ...props
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link href={href} passHref>
      <Button {...props}>{children}</Button>
    </Link>
  )
}
