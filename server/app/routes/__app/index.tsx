import { Link } from "@remix-run/react"
import Button from "~/components/button"

export default function Index() {
  return (
    <>
      <section className="flex m-4 p-6 border-4 rounded-lg">
        <div className="flex flex-col m-auto py-24 text-center">
          <p className="text-4xl">現在，{"n"}人が利用しています</p>
          <div>ここに追加の情報</div>
        </div>
      </section>
      <section className="m-4 p-6 border-4 rounded-lg">
        <h2 className="text-3xl font-bold">
          コメントのやつ<small>(名称募集中)</small>
        </h2>
        <p className="my-4">
          画面にコメントを流します。
          <br />
          パソコンにアプリをダウンロードしてご利用ください。
        </p>
        <Link to="/download">
          <Button text="ダウンロード" />
        </Link>
      </section>
    </>
  )
}
