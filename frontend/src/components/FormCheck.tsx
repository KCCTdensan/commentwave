import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"
import { forwardRef, HTMLProps, Ref } from "react"

type FormCheckProps = {
  label: string
  id: string
} & HTMLProps<HTMLInputElement>

const FormCheck = forwardRef(
  ({ label, id }: FormCheckProps, ref: Ref<HTMLInputElement>) => (
    <>
      <Checkbox.Root
        className="flex h-5 w-5 items-center justify-center rounded border bg-white hover:bg-gray-100 focus:border-black"
        id={id}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="w-full" htmlFor={id}>
        {label}
      </label>
    </>
  )
)

FormCheck.displayName = "FormCheck"

export default FormCheck
