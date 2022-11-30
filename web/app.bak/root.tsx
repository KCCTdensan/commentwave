import { useEffect, useState } from "react"
import { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import io, { Socket } from "socket.io-client"

import { SocketProvider } from "~/libs/socket"
import tailwindStylesheetUrl from "~/styles/tailwind.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "com",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const socket = io()
    setSocket(socket)
    return () => {
      socket.close()
    }
  }, [])

  return (
    <html lang="ja" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <SocketProvider socket={socket}>
          <Outlet />
        </SocketProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
