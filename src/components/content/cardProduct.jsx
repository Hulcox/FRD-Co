import { Divider } from "@mui/material"
import Image from "next/image"

const CardProduct = ({ image, title, description, width, height, reverse }) => {
  return (
    <>
      <div
        className={
          "flex p-4 mx-32  " + (reverse ? "flex-row-reverse" : "flex-row")
        }
      >
        <div className=" box-content">
          <Image src={image} alt="test" width={width} height={height} />
        </div>
        <div className="flex-col mx-auto my-auto">
          <h1 className="text-5xl font-bold pb-4">{title}</h1>
          <p className="text-lg font-medium">{description}</p>
        </div>
      </div>
      <Divider sx={{ mx: 18 }} />
    </>
  )
}
export default CardProduct
