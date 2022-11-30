import { Link } from "@remix-run/react"
import Button from "~/components/button"

export default function Download() {
  return (
    <>
      <h1 className="m-6 text-4xl font-bold">ダウンロード</h1>
      <section className="m-4 p-6 border-4 rounded-lg">
        <h2 className="text-3xl font-bold">コメントのやつ</h2>
        <p className="my-4">鋭意開発中です</p>
        <Link to="#">
          <Button text="Windows x64" />
        </Link>
      </section>
    </>
  )
}
