import { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import "~/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
