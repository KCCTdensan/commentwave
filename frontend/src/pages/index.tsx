import CenterLayout from "~/components/CenterLayout"
import CommonHeader from "~/components/CommonHeader"
import RoomMessage from "~/components/RoomMessage";

export default function Index() {
  return (
    <CenterLayout>
      <h1>hello, world</h1>
        <RoomMessage />
    </CenterLayout>
  )
}
