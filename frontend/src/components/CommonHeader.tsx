import { useAtom } from "jotai"

import BrandLogo from "~/components/BrandLogo"
import LinkButton from "~/components/LinkButton"
import UserDropdown from "~/components/UserDropdown"
import { userProfileAtom } from "~/libs/jotai"

export default function CommonHeader() {
  const [userProfile] = useAtom(userProfileAtom)

  return (
    <header className="flex">
      <div className="mx-auto flex w-full max-w-4xl justify-between px-3">
        <BrandLogo />
        {true ? (
          <UserDropdown profile={userProfile} />
        ) : (
          <div className="flex h-full items-center space-x-2">
            <LinkButton href="/login">Login</LinkButton>
            <LinkButton href="/register">Register</LinkButton>
          </div>
        )}
      </div>
    </header>
  )
}
