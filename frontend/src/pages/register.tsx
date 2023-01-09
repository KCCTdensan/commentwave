import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import CardLayout from "~/components/CardLayout"
import FormCheck from "~/components/FormCheck"
import FormInput from "~/components/FormInput"
import FormSubmit from "~/components/FormSubmit"

type RegisterForm = z.infer<typeof registerSchema>

const registerSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: "メールアドレスを入力してください" })
      .email({ message: "有効なメールアドレスを入力してください" }),
    password: z
      .string()
      .min(8, { message: "少なくとも8文字の長さが必要です" })
      .regex(/(?=.*[A-Za-z])(?=.*\d)/, {
        message: "半角アルファベットと半角数字を含んでください",
      }),
    confirm: z
      .string()
      .nonempty({ message: "パスワードをもう一度入力してください" }),
    terms: z.boolean(),
  })
  .refine(data => data.password === data.confirm, {
    message: "パスワードが一致しません",
    path: ["confirm"],
  })

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  function onSubmit({ email, password }: RegisterForm) {
    console.log(email, password)
  }

  return (
    <CardLayout>
      <h1 className="mb-10 text-6xl font-black">Sign up:</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <FormInput
            label="email"
            type="email"
            id="email"
            placeholder="johndoe@example.net"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <FormInput
            label="password"
            type="password"
            id="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500" role="alert">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <FormInput
            label="password (again)"
            type="password"
            id="confirm"
            placeholder="password"
            {...register("confirm")}
          />
          {errors.confirm && (
            <p className="text-red-500" role="alert">
              {errors.confirm?.message}
            </p>
          )}
        </div>
        <div className="my-8 flex w-full items-center space-x-2">
          <FormCheck
            label="利用規約に同意します"
            id="terms"
            {...register("terms")}
          />
        </div>
        <div className="mt-8">
          <FormSubmit value="Register" />
        </div>
      </form>
    </CardLayout>
  )
}
