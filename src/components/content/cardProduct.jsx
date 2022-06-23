import { Divider } from "@mui/material"
import ProductImages from "./ProductImages"

const CardProduct = ({ image, title, description, reverse }) => {
  return (
    <>
      <div
        className={
          "flex p-4 mx-32  " + (reverse ? "flex-row-reverse" : "flex-row")
        }
      >
        <div className=" box-content">
          <ProductImages
            sx={{ mb: 2 }}
            width={640}
            height={640}
            image={image}
            name={"image" + title}
            className="m-auto mb-2  max-w-[640px] align-baseline"
          />
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
