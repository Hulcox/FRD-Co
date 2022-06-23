import { Skeleton } from "@mui/material"

const ProductImages = ({ image, width, height, name, sx, className, key }) => {
  return (
    <>
      {image ? (
        <img
          className={className}
          src={image}
          alt={"Product picture: " + name}
          key={name}
        />
      ) : (
        <Skeleton variant="rectangular" width={width} height={height} sx={sx} />
      )}
    </>
  )
}

export default ProductImages
