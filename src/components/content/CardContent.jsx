import {
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Skeleton,
} from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const CardDetail = ({
  name,
  description,
  id,
  rating,
  image1,
  price,
  categorie,
  color,
  stock,
}) => {
  const router = useRouter()
  const [value, setValue] = useState(rating)

  const handleClick = () => {
    if (categorie)
      router.push({
        pathname: "/products/" + name,
        query: { categorie: categorie, id: id },
      })
    else
      router.push({
        pathname: "/products/" + name,
        query: { categorie: "all" },
      })
  }

  if (stock == 0) return null
  //don't show product with no stock
  else
    return (
      <div>
        {" "}
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardActionArea onClick={handleClick}>
            <CardContent>
              <div className="m-auto h-[250px] w-[300px]">
                {image1 ? (
                  <img
                    className="m-auto max-h-[250px] max-w-[300px] align-baseline"
                    src={image1}
                    alt={"Product picture: " + name}
                  />
                ) : (
                  <Skeleton
                    variant="rectangular"
                    width={300}
                    height={250}
                    sx={{ mx: "auto" }}
                  />
                )}
              </div>
              <div className="flex justify-between mt-2">
                <h5 className="text-xl font-bold align-baseline">{name}</h5>
                <h5 className="text-xl font-bold align-baseline">
                  {price ? price + " €" : null}
                </h5>
              </div>
              <p>{description}</p>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
}

export default CardDetail
