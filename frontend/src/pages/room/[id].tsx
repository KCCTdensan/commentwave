import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { apiBase } from "~/constants"

import Meta from "~/components/Meta"
import RoomLayout from "~/components/RoomLayout"
import RoomHeader from "~/components/RoomHeader"

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query
  const res = await fetch(`${apiBase}/room/${id}/meta`)
  if (!res.ok) return { notFound: true }
  const room = await res.json()
  return {
    props: { room },
  }
}

export default function Room({ room }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Meta title={`${room.name} | wave`} />
      <RoomLayout>
        <RoomHeader title={room.name} />
      </RoomLayout>
    </>
  )
}
