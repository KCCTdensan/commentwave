import BrandIcon from "~/components/BrandIcon"

export default function BrandLogo() {
  return (
    <div className="flex h-20 w-fit items-center justify-center">
      <BrandIcon />
      <span className="ml-1 text-xl font-extrabold">commentwave</span>
    </div>
  )
}
