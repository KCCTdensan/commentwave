import { useForm, SubmitHandler } from "react-hook-form"
import FormInput from "~/components/FormInput";
import {PaperPlaneIcon} from "@radix-ui/react-icons";

type commentInputs = {
    value: string,
    id: number,
    time: Date,
}
export default function RoomMessage () {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<commentInputs>();

    const onSubmit: SubmitHandler<commentInputs> = (data) => {
        console.log(data)
    }
    return (
        <>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <FormInput label={'comment'} id={'comment'} placeholder={'comment'} {...register('value')}></FormInput>
                <button className="" type={"submit"}><PaperPlaneIcon className="w-8 h-8" /></button>
            </form>
        </>
    )
}