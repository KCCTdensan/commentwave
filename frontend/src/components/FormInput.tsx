import { forwardRef, HTMLProps, Ref } from "react"

type FormInputProps = {
  label: string
  id: string
} & HTMLProps<HTMLInputElement>

const FormInput = forwardRef(
  ({ label, id, ...props }: FormInputProps, ref: Ref<HTMLInputElement>) => (
    <>
      <label className="text-lg font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        className="mt-1 w-full rounded-lg border-4 border-gray-300 p-2 focus:border-black"
        id={id}
        ref={ref}
        {...props}
      />
    </>
  )
)

FormInput.displayName = "FormInput"

export default FormInput
