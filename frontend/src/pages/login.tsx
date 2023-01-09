import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import CardLayout from "~/components/CardLayout"
import FormInput from "~/components/FormInput"
import FormSubmit from "~/components/FormSubmit"

type LoginForm = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "メールアドレスを入力してください" })
    .email({ message: "有効なメールアドレスを入力してください" }),
  password: z.string().nonempty({ message: "パスワードを入力してください" }),
})

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  function onSubmit({ email, password }: LoginForm) {
    console.log(email, password)
  }

  return (
    <CardLayout>
      <h1 className="mb-10 text-6xl font-black">Sign in:</h1>
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
        <div className="mt-8">
          <FormSubmit value="Login" />
        </div>
      </form>
    </CardLayout>
  )
}
