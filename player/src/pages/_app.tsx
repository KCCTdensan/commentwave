import "~/global.css"

import { Inter, Zen_Kaku_Gothic_New } from "@next/font/google"
import { Provider } from "jotai"
import { AppProps } from "next/app"

const inter = Inter({
  subsets: ["latin"],
  variable: "--f-inter",
})

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "700", "900"],
  subsets: ["japanese"],
  variable: "--f-zkgn",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <main
        className={[
          inter.variable,
          zenKakuGothicNew.className,
          zenKakuGothicNew.variable,
        ].join(" ")}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
