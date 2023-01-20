import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import UserIcon from "~/components/UserIcon"

export default function UserDropdown({ profile }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="User menu">
          <UserIcon src={profile.iconUrl} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="rounded-lg bg-white p-4 drop-shadow">
          <DropdownMenu.Item className="">asdf</DropdownMenu.Item>
          <DropdownMenu.Separator className="h-px bg-gray-200" />
          <DropdownMenu.Item className="">Log out</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
