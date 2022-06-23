import { Input } from "@mui/material"

const InputForm = (props) => {
  return (
    <>
      <Input
        {...props}
        className=" flex-1 block w-full rounded-md sm:text-sm border-gray-300 p-2 my-2 text-black"
      />
    </>
  )
}

export default InputForm
