import { FormEventHandler, useEffect, useRef, useState } from "react"
import { ActionFunction, LoaderFunction, json } from "@remix-run/node"
import { useLoaderData, Form, Link } from "@remix-run/react"
import {} from "@headlessui/react"
import { ComsRoom, ComsMsg, ComsUser } from "@prisma/client"
import sanitizeHtml from "sanitize-html"
import Emoji from "~/components/emoji"
import Logo from "~/components/logo"
import { filter, tsDisp } from "~/libs/utils"
import { useSocket } from "~/libs/socket"
import { getRoomWithMsgs, createMsg } from "~/models/coms.server"

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()



  // newmsg:
  //   pub to redis
  //   write to db (for history)

return null
  console.log("action called!")
  throw new Response("oops!", { status: 500 })

    // // enterで送信の設定
    // // validate
    // // db store
    // const text = formText.trim()
    // socket.emit("comsMsg", {
    //   text,
    //   timestamp: new Date(),
    // })
    // setFormText("")

  // await createMsg({
  //   room: { connect: { id: room.id } },
  //   text: msg,
  // })
}

export const loader: LoaderFunction = async ({ params }) => {
  const room = await getRoomWithMsgs({ screen: params.id })

  if (!room || !room.opened)
    throw new Response("room not found", {
      status: 404,
    })

  const now = new Date()
  if (now < room.opened || (room.closed && room.closed < now))
    throw new Response("room closed", {
      status: 403,
    })

  return json({
    room: filter(["id", "screen", "name", "opened", "closed"], room),
    history: room.msgs,
  })
}

export default function Coms() {
  const { room, history } = useLoaderData()
  const tlRef = useRef<HTMLDivElement>(null)
  const [formFocus, setFormFocus] = useState(false)
  const [formText, setFormText] = useState("")
  const [timeline, setTimeline] = useState(history)
  const socket = useSocket()

  const isBottom = () => {
    if (!tlRef.current) return false
    const { scrollTop, scrollHeight, clientHeight } = tlRef.current
    return scrollTop + clientHeight === scrollHeight
  }

  const scrollBottom = () => {
    console.log("we need to scroll!")
  }

  const onSubmit: HTMLEventHandler<HTMLButtonElement> = async e => {
    console.log("submit:", formText)
    socket.to("")
  }

  useEffect(() => {
    if (!socket) return
    socket.emit("comsJoinRoom", { room })

    socket.on("comsMsg", msg => {
      const scroll = isBottom()
      setTimeline(tl => [...tl, msg])
      if (scroll) scrollBottom()
    })

    socket.on("")

    return () => {
      socket.leave(room)
    }
  }, [socket])

  return (
    <main className="flex flex-col max-w-3xl h-full container mx-auto">
      <header className="mx-[calc(50%-50vw)] px-[calc(50vw-50%)] border-b-4 border-gray-400 drop-shadow">
        <div className="flex px-4 py-2 items-center">
          <Logo />
          <Emoji className="w-4 mx-3">🟢{/* todo: online status 🟡🔴 */}</Emoji>
          <h2 className="my-auto text-2xl font-bold">{room.name}</h2>
        </div>
      </header>
      <div
        className="flex flex-col mt-auto px-4 py-2 overflow-y-scroll"
        ref={tlRef}>
        {/* todo: 最下層までスクロール */}
        {timeline.map((msg, i) => (
          <p
            className="flex my-2 px-2 py-1 bg-gray-100 border border-gray-200 rounded-lg"
            key={i}>
            <span className="grow">{msg.text}</span>
            <span className="mx-3 font-bold text-gray-400">
              {tsDisp(msg.timestamp)}
            </span>
            <button>#</button>
          </p>
        ))}
      </div>
      <div className="flex mx-4 mb-3 p-3 bg-gray-100 border border-gray-200 rounded-lg drop-shadow">
        <div className={formFocus ? "hidden sm:flex" : "flex"}>
          <button className="mr-2 p-2 transition duration-200 hover:scale-105 active:scale-90">
            {/* todo: 絵文字ピッカー */}
            <Emoji className="w-14">📛</Emoji>
          </button>
        </div>
        <textarea
          className="w-full p-3 resize-none border-4 border-gray-400 rounded-lg"
          value={formText}
          onChange={e => setFormText(e.target.value)}
          onFocus={_ => setFormFocus(true)}
          onBlur={_ => setFormFocus(false)}
          placeholder="ここにメッセージを入力……"
          rows={1}
        />
        <button
          className="ml-2 p-2 transition duration-200 hover:scale-105 active:scale-90"
          onClick={onSubmit}>
          <Emoji className="w-12">{true ? "💬" : "💭"}</Emoji>
        </button>
      </div>
    </main>
  )
}
