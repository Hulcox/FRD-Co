import Slider from "react-slick"
import { Card, CardContent, CardMedia, Skeleton } from "@mui/material"

const SliderProduct = ({ row, settings }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold align-baseline">
        Produit de la catégorie :{" "}
      </h2>
      <Slider {...settings}>
        {row.map((elm) => (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Skeleton
                  variant="rectangular"
                  width={250}
                  height={210}
                  sx={{ mx: "auto" }}
                />
                <h5 className="text-2xl font-bold align-baseline">Product</h5>
                <p>{elm}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderProduct
